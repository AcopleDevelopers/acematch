import React from 'react'
import PropTypes from 'prop-types'
import {View, FlatList, TouchableOpacity} from 'react-native'
import {Circle} from 'react-native-progress'
import BlueText from 'App/components/texts/BlueText'
import ExtraMatch from 'App/components/texts/ExtraMatch'
import ImageTitle from 'App/components/ImageTitle'
import Dots from 'App/components/Dots'
import autobind from 'autobind-decorator'

import styles from './styles'

class List extends React.Component {
  static propTypes = {
    dots: PropTypes.boolean,
    back: PropTypes.boolean,
    titleBackground: ImageTitle.propTypes.background,
    extraInfo: PropTypes.object,
    steps: PropTypes.arrayOf({
      generateData: PropTypes.func.isRequired,
      title: PropTypes.string.isRequired
    })
  }

  static defaultProps = {
    steps: []
  }

  state = {
    currentStepIndex: 0,
    selectedIds: [],
    scrollOffset: 0
  }

  componentDidMount() {
    this.loadDataForStep(0)
  }

  @autobind
  setLoading(loading) {
    this.setState({loading})
  }

  @autobind
  async goBack() {
    const {currentStepIndex, selectedIds} = this.state
    const nextStep = currentStepIndex === 0 ? 0 : currentStepIndex - 1
    const selectedId = selectedIds.slice(-2)[0]
    await this.setState({
      selectedIds: selectedIds.slice(0, -2)
    })
    this.loadDataForStep(nextStep, selectedId)
  }

  @autobind
  reset() {
    this.setState({loading: true, selectedIds: []})
    this.loadDataForStep(0)
  }

  @autobind
  async loadDataForStep(index, selectedId, stepInfo = {}) {
    const {steps, extraInfo} = this.props
    if (steps.length === 0) return
    this.setState(prevState => ({
      loading: true,
      currentStepIndex: index,
      selectedIds: [...prevState.selectedIds, selectedId]
    }))
    const nextStep = steps[index]
    const data = await nextStep.generateData({
      nextStep: (selectedId, stepInfo) =>
        this.loadDataForStep(index + 1, selectedId, stepInfo),
      refetch: () =>
        this.refetchData(nextStep, index, selectedId, extraInfo, stepInfo),
      setLoading: value => this.setLoading(value),
      selectedId,
      ...extraInfo,
      ...stepInfo
    })
    // If the step has change, do not consider the result
    if (this.state.currentStepIndex !== index) return

    this.setState({
      data,
      currentStepIndex: index,
      loading: false,
      scrollOffset: 0
    })
  }

  @autobind
  async refetchData(step, index, selectedId, extraInfo, stepInfo) {
    const {scrollOffset} = this.state
    this.setState({loading: true})
    const data = await step.generateData({
      nextStep: (selectedId, stepInfo) =>
        this.loadDataForStep(index + 1, selectedId, stepInfo),
      refetch: () =>
        this.refetchData(step, index, selectedId, extraInfo, stepInfo),
      selectedId,
      setLoading: value => this.setLoading(value),
      ...extraInfo,
      ...stepInfo
    })
    if (this.state.currentStepIndex !== index) return
    this.setState(
      {
        data,
        currentStepIndex: index,
        loading: false,
        scrollOffset: 0
      },
      () => {
        if (this.list) {
          this.list.scrollToOffset({offset: scrollOffset, animated: false})
        }
      }
    )
  }

  render() {
    const {steps, dots, back, titleBackground} = this.props
    const {currentStepIndex, data, loading} = this.state
    const currentStep = steps[currentStepIndex]

    return (
      <View style={styles.container}>
        <ImageTitle
          background={titleBackground}
          title={currentStep.title}
          leftComponent={
            back && currentStepIndex > 0 ? (
              <BlueText onPress={this.goBack}>Atrás</BlueText>
            ) : null
          }
          centerComponent={<ExtraMatch/>}
          rightComponent={
            dots ? (
              <Dots activeIndex={currentStepIndex} dotsNumber={steps.length} />
            ) : null
          }
        />
        {loading ? (
          <View style={styles.loadingContainer}>
            <Circle size={60} indeterminate color="#4CB9FF" />
          </View>
        ) : data && data.length > 0 ? (
          <FlatList
            ref={ref => (this.list = ref)}
            style={styles.container}
            data={data}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item: {component: Component, ...props}}) => (
              <Component {...props} />
            )}
            onMomentumScrollEnd={evt =>
              this.setState({scrollOffset: evt.nativeEvent.contentOffset.y})
            }
            onScrollEndDrag={evt =>
              this.setState({scrollOffset: evt.nativeEvent.contentOffset.y})
            }
          />
        ) : currentStep.emptyList ? (
          currentStep.emptyList
        ) : null}
      </View>
    )
  }
}

export default List
