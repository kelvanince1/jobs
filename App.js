import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/AuthScreen';

Navigation.registerComponent("jobs.AuthScreen", () => AuthScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "jobs.AuthScreen",
    title: AuthScreen
  }
})
