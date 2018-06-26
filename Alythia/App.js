import Loading from "./components/loading";
import Scanner from "./components/scanner";
import { createStackNavigator } from "react-navigation";

const App = createStackNavigator(
  {
    Loading: { screen: Loading },
    Scanner: { screen: Scanner }
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
