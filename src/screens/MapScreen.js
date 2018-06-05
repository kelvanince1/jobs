import React, { Component } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

import { fetchJobs, startAddJob, jobAdded } from '../actions/jobActions';
import JobInput from '../components/AuthInput';

class MapScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    region: {
      longitude: -122.431297,
      latitude: 37.773972,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    },
    jobTerm: ''
  }

  componentDidUpdate() {
    if (this.props.jobAdded) {
      this.props.navigator.switchToTab({ tabIndex: 2 });
    }
  }

  onNavigatorEvent = event => {
    if (event.type === "ScreenChangedEvent") {
      if (event.id === "willAppear") {
        this.props.onStartAddJob();
      }
    }
  };

  onRegionChangeComplete = (region) => {
    this.setState({ region: region });
  }

  onJobTermUpdate = (jobTerm) => {
    this.setState({ jobTerm: jobTerm });
  };

  onButtonPress = () => {
    this.props.onFetchJobs(this.state.region, this.state.jobTerm);
  }

  render() {
    return (
      <View>
      <JobInput
        placeholder='Enter your job search term'
        style={styles.input}
        value={this.state.jobTerm}
        autoCapitalize='none'
        onChangeText={(val) => this.onJobTermUpdate(val)}
      />
        <MapView
          initialRegion={this.state.region}
          style={styles.map}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <Button
            large
            title='Search this area'
            backgroundColor='#009688'
            onPress={this.onButtonPress}
          />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "76%"
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb',
    marginTop: 28
  },
});

const mapStateToProps = (state) => {
  return {
    jobAdded: state.jobs.jobAdded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchJobs: (region, jobTerm) => dispatch(fetchJobs(region, jobTerm)),
    onStartAddJob: () => dispatch(startAddJob())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
