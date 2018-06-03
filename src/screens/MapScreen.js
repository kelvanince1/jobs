import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

import { fetchJobs, startAddJob, jobAdded } from '../actions/jobActions'

class MapScreen extends Component {
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
    }
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
    this.setState({ region: region })
  }

  onButtonPress = () => {
    this.props.onFetchJobs(this.state.region);
  }

  render() {
    return (
      <View>
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
    height: "91%"
  }
});

const mapStateToProps = (state) => {
  return {
    jobAdded: state.jobs.jobAdded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchJobs: (region) => dispatch(fetchJobs(region)),
    onStartAddJob: () => dispatch(startAddJob())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
