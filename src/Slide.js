import React, { PureComponent } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import PhotoView from 'react-native-photo-view';

import Loading from './Loading';

const { width, height } = Dimensions.get('window');

export class Slide extends PureComponent {
  render() {
    const {
      showLoading,
      item: {
        image,
        overlay,
      },
    } = this.props;

    return (
      <View>
        {showLoading && <Loading />}

        <PhotoView
          source={image}
          maximumZoomScale={3}
          zoomScale={1}
          androidScaleType="center"
          resizeMode="contain"
          style={styles.photoViewContainer}
        />

        {overlay}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photoViewContainer: {
    alignItems: 'center',
    top: -32,
    justifyContent: 'center',
    width,
    height: height - 128,
  },
});
