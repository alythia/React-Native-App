import React from 'react'
import Loading from './components/loading'
import Scanner from './components/scanner'
import Login from './components/login'
import Signup from './components/signup'
import AccountCreated from './components/account-created'
import { createStackNavigator } from 'react-navigation'

const App = createStackNavigator(
  {
    Loading: { screen: Loading },
    Login: { screen: Login },
    Signup: { screen: Signup },
    AccountCreated: { screen: AccountCreated },
    Scanner: { screen: Scanner },
  },
  {
    navigationOptions: {
      headerLeft: null,
      headerStyle: {
        backgroundColor: '#cccccc',
        height: 5,
      },
    },
  }
)

export default App
