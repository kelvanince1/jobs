import React, { Component } from 'react';
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native';

import startMainTabs from './MainTabs';
import AuthInput from '../components/AuthInput';

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    authMode: 'login',
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        },
        touched: false
      }
    }
  };

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return(
      <View>
        <AuthInput
          placeholder='Your Email address'
          style={styles.input}
          value={this.state.controls.email.value}
          valid={this.state.controls.email.valid}
          touched={this.state.controls.email.touched}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
        />
        <View style={
          this.state.viewMode === 'portrait' || this.state.authMode === 'login'
          ? styles.portraitPasswordContainer
          : styles.landscapePasswordContainer
        }>
        <View style={
          this.state.viewMode === 'portrait' || this.state.authMode === 'login'
          ? styles.portraitPasswordWrapper
          : styles.landscapePasswordWrapper
        }>
        <AuthInput
          placeholder='Password'
          style={styles.input}
          value={this.state.controls.password.value}
          valid={this.state.controls.password.valid}
          touched={this.state.controls.password.touched}
          secureTextEntry
        />
        </View>
      </View>
        <Button title="Log In" onPress={this.loginHandler} />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundStyle: {
    width: '100%',
    flex: 1
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb'
  },
  landscapePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  portraitPasswordContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  landscapePasswordWrapper: {
    width: '45%'
  },
  portraitPasswordWrapper: {
    width: '100%'
  }
});

export default AuthScreen;
