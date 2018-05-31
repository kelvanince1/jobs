import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapView from 'react-native-maps';

class MapScreen extends Component {
  state = {
    region: {
      longitude: -122.431297,
      latitude: 37.773972,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
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
          />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "92%"
  }
})

export default MapScreen;
