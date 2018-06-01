import { Navigation } from 'react-native-navigation';

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'jobs.WelcomeScreen',
        label: 'Welcome',
        title: 'Welcome'
      },
      {
        screen: 'jobs.MapScreen',
        label: 'Find your job',
        title: 'Find your job'
      },
      {
        screen: 'jobs.DeckScreen',
        label: 'Deck',
        title: 'Swipe right if you like'
      },
      {
        screen: 'jobs.ReviewScreen',
        label: 'Review',
        title: 'Your liked jobs'
      },
    ]
  })
};

export default startTabs;
