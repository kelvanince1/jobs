import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import MapScreen from './src/screens/MapScreen';

Navigation.registerComponent("jobs.AuthScreen", () => AuthScreen);
Navigation.registerComponent("jobs.WelcomeScreen", () => WelcomeScreen);
Navigation.registerComponent("jobs.MapScreen", () => MapScreen);
Navigation.registerComponent("jobs.ReviewScreen", () => ReviewScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "jobs.AuthScreen",
    title: AuthScreen
  }
})
