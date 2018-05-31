import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

class MapScreen extends Component {
  state = {
    region: {
      longitude: -122,
      latitude: 37,
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
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 250
  }
})

export default MapScreen;
