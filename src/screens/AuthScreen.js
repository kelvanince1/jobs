import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AuthScreen extends Component {
  loginHandler = () => {

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
