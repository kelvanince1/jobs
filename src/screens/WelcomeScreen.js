import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to job app', color: '#03A9F4' },
  { text: 'Your next career awaits', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };
  
  render() {
    return (
      <Slides data={SLIDE_DATA} />
    );
  };
};

export default WelcomeScreen;
