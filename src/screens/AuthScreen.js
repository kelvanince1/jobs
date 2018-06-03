import React, { Component } from 'react';
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native';

import startMainTabs from './MainTabs';
import AuthInput from '../components/AuthInput';
import validate from '../utility/validation';

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

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  updateStyles = (dims) => {
    this.setState({
      viewMode:
        dims.window.height > 500 ? 'portrait' : 'landscape'
    })
  }

  loginHandler = () => {
    startMainTabs();
  };

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === 'password') {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      }
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid: key === 'password' ? validate(prevState.controls.confirmPassword.value, prevState.controls.confirmPassword.validationRules, connectedValue) : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(value, prevState.controls[key].validationRules, connectedValue),
            touchedValue: true
          },
        }
      }
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>Please Log In</Text>
        <AuthInput
          placeholder='Your Email address'
          style={styles.input}
          value={this.state.controls.email.value}
          valid={this.state.controls.email.valid}
          touched={this.state.controls.email.touched}
          onChangeText={(val) => this.updateInputState('email', val)}
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
          onChangeText={(val) => this.updateInputState('password', val)}
          valid={this.state.controls.password.valid}
          touched={this.state.controls.password.touched}
          secureTextEntry
        />
        </View>
      </View>
        <Button title="Log In" large onPress={this.loginHandler} />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "92%",
    backgroundColor: '#B5E5F0',
    flexDirection: 'column'
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center'
  },
  backgroundStyle: {
    width: '100%',
    flex: 1,
    backgroundColor: '#B5E5F0'
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
