import React from 'react'
import Swiper from 'react-native-swiper'
import styles from './styles'
import PropTypes from 'prop-types'
import FinalStep from './FinalStep'
import Step from './Step'
import infos1 from './infos/1'
import infos2 from './infos/2'
import Modal from 'App/components/Modal'
import Dots from 'App/components/Dots'

export default class Tutorial extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    close: PropTypes.func
  }

  state = {
    activeIndex: 0
  }

  render() {
    const {close, visible} = this.props
    const {activeIndex} = this.state

    return (
      <Modal visible={visible}>
        <Swiper
          ref={ref => {
            this.swiper = ref
          }}
          style={styles.swipper}
          loop={false}
          showsPagination={false}
          onIndexChanged={index => this.setState({activeIndex: index})}>
          <Step key="1" titleText="¡Bienvenido a AceMatch!" infos={infos1} />
          <Step key="2" titleText="Secciones de la app" infos={infos2} />
          <FinalStep key="3" close={close} />
        </Swiper>
        <Dots
          style={styles.dots}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          dotsNumber={3}
          activeIndex={activeIndex}
        />
      </Modal>
    )
  }
}
