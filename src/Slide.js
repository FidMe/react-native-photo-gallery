import { ActivityIndicator, Dimensions, View } from 'react-native';
import PhotoView from 'react-native-photo-view';
import React, { Component } from 'react';

const styles = {
  slideC: {
    backgroundColor: '#F1F1F1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewC: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 128,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    position: 'absolute',
    top: (Dimensions.get('window').height / 2) - 10,
    left: (Dimensions.get('window').width / 2) - 10,
  },
};

export class Slide extends Component {
  render() {
    return (
      <View style={styles.slideC}>
        <ActivityIndicator style={styles.loader} />
        <PhotoView
          source={this.props.item.image}
          maximumZoomScale={3}
          zoomScale={1}
          androidScaleType="center"
          resizeMode="contain"
          style={styles.scrollViewC}
        />
      </View>
    );
  }
}
