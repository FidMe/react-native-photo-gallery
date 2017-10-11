import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import PhotoView from 'react-native-photo-view';

export class Slide extends Component {
  render() {
    const inside = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height - 128,
    };

    return (
      <View
        style={[
          styles.slideC,
          { width: Dimensions.get('window').width, height: Dimensions.get('window').height }
        ]}
      >
        <ActivityIndicator style={styles.loader} />

        <PhotoView
          source={this.props.item.image}
          maximumZoomScale={3}
          zoomScale={1}
          androidScaleType="center"
          resizeMode="contain"
          style={[
            styles.scrollViewC,
            inside
          ]}
          onTap={this.props.onPressOutside}
        />

        {this.props.item.overlay}
      </View>
    );
  }
}

const styles = {
  slideC: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewC: {
    alignItems: 'center',
    top: -32,
    justifyContent: 'center',
  },
  loader: {
    position: 'absolute',
    top: (Dimensions.get('window').height / 2) - 10,
    left: (Dimensions.get('window').width / 2) - 10,
  },
};
