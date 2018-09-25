import {StackNavigator} from 'react-navigation'

import Login from './Login'
import ForgotPassword from './ForgotPassword'
import Register from './Register'
import Regulation from './Regulation'
import TermsAndConditions from '../TermsAndConditions'
import PrivacyPolicy from '../PrivacyPolicy'

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
  },
  {
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {borderBottomWidth: 0},
      headerTintColor: 'white'
    }
  }
)
