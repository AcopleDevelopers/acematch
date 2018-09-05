import {StackNavigator} from 'react-navigation'

import Subscriptions from './Subscriptions'
import PlanDetails from './PlanDetails'
import PlanDescription from './PlanDescription'
import RegisterCard from './RegisterCard'
import TermsAndConditions from '../TermsAndConditions'
import PrivacyPolicy from '../PrivacyPolicy'

export default StackNavigator(
  {
    Subscriptions: {
      screen: Subscriptions
    },
    PlanDetails: {
      screen: PlanDetails
    },
    PlanDescription: {
      screen: PlanDescription
    },
    TermsAndConditions: {
      screen: TermsAndConditions
    },
    PrivacyPolicy: {
      screen: PrivacyPolicy
    },
    RegisterCard: {
      screen: RegisterCard
    }
  },
  {
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {borderBottomWidth: 0},
      headerTintColor: 'white'
    }
  }
)
