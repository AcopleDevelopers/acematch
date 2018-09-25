import {StackNavigator} from 'react-navigation'

import Login from './Login'
import ForgotPassword from './ForgotPassword'
import Register from './Register'
import Regulation from './Regulation'
import TermsAndConditions from '../TermsAndConditions'
import PrivacyPolicy from '../PrivacyPolicy'
import BuyExtraMatch from '../BuyExtraMatch'

export default StackNavigator(
  {
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    },
    TermsAndConditions: {
      screen: TermsAndConditions
    },
    PrivacyPolicy: {
      screen: PrivacyPolicy
    },
    Regulation: {
      screen: Regulation
    },
    ForgotPassword: {
      screen: ForgotPassword
    },
    BuyExtraMatch: {
      screen: BuyExtraMatch
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
