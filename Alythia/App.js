import React from 'react'
import Loading from './components/loading'
import Scanner from './components/scanner'
import Login from './components/login'
import Signup from './components/signup'
import Signup_pin from './components/signup-pin'
import AccountCreated from './components/account-created'
import AuthorizingView from './components/authorizing-view'
import UserLogin from './components/userLogin'
import { createStackNavigator } from 'react-navigation'

const App = createStackNavigator(
  {
    Loading: { screen: Loading },
    Login: { screen: Login },
    Signup: { screen: Signup },
    Signup_pin: { screen: Signup_pin },
    AccountCreated: { screen: AccountCreated },
    AuthorizingView: { screen: AuthorizingView },
    Scanner: { screen: Scanner },
    UserLogin: { screen: UserLogin }
  },
  {
    navigationOptions: {
      headerLeft: null,
      headerTransparent: true,
      gesturesEnabled: false,
      headerStyle: {
        borderBottomWidth: 0
      }
    },
  }
)

export default App
