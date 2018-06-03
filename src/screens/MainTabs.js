import { Navigation } from 'react-native-navigation';

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'jobs.WelcomeScreen',
        label: 'Welcome',
        title: ''
      },
      {
        screen: 'jobs.MapScreen',
        label: 'Find your job',
        title: ''
      },
      {
        screen: 'jobs.DeckScreen',
        label: 'Deck',
        title: ''
      },
      {
        screen: 'jobs.ReviewScreen',
        label: 'Review',
        title: ''
      },
    ]
  })
};

export default startTabs;
