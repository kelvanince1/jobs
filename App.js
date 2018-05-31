import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import configureStore from './src/reducers/ConfigureStore';

const store = configureStore();

Navigation.registerComponent("jobs.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("jobs.WelcomeScreen", () => WelcomeScreen, store, Provider);
Navigation.registerComponent("jobs.MapScreen", () => MapScreen, store, Provider);
Navigation.registerComponent("jobs.ReviewScreen", () => ReviewScreen, store, Provider);
Navigation.registerComponent("jobs.DeckScreen", () => DeckScreen, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: "jobs.AuthScreen",
    title: AuthScreen
  }
})
