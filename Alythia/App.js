import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Loading from "./components/loading";
import Scanner from "./components/scanner";
import Login from "./components/auth-forms";
import { createStackNavigator } from "react-navigation";

const App = createStackNavigator(
  {
    Loading: {screen: Loading},
    Login: {screen: Login},
    Scanner: {screen: Scanner}
  },
  {
    navigationOptions: {
      headerLeft: null,
      headerStyle: {
        backgroundColor: "#cccccc",
        height: 5
      }
    }
  }
);

export default App;
