import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    }
    return (
      <Card title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android' ? true : false}
            initialRegion={initialRegion}
          >
          </MapView>
        </View>

        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
        </Text>
      </Card>
    )
  }

  render() {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
        />
      </View>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs.results
  }
}

export default connect(mapStateToProps)(DeckScreen);
