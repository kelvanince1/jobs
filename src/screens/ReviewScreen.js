import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

class ReviewScreen extends Component {
  renderLikedJobs() {
    return this.props.likes.map(job => {
      const initialRegion = {
        longitude: job.longitude,
        latitude: job.latitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      }
      return (
        <Card>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{job.company}</Text>
              <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(job.url)}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  italics: {
    fontStyle: 'italic'
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

function mapStateToProps(state) {
  return { likes: state.likes };
}

export default connect(mapStateToProps)(ReviewScreen);
