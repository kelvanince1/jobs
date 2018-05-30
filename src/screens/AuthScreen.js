import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import startMainTabs from './MainTabs';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return(
      <View>
        <Text>AuthScreen</Text>
        <Button title="Log In" onPress={this.loginHandler} />
      </View>
    );
  };
};

export default AuthScreen;
