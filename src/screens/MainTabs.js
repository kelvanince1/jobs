import { Navigation } from 'react-native-navigation';

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
      screen: 'jobs.ReviewScreen',
      label: 'Review',
      title: 'Review'
    }
  ]
})
