import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  View,
  Animated,
  StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Pagination, Slide, GalleryList } from './src';

const ANIMATION_DURATION = 600;

export default class Gallery extends Component {
  state = {
    index: 0,
  };

  static defaultProps = {
    backgroundColor: '#000',
    data: [],
    imagesPerRow: 4,
    imageMargin: 1,
    initialNumToRender: 4,
    initialPaginationSize: 10
  };

  scale = new Animated.Value(0);
  pagination = new Animated.Value(0);

  onScrollEnd = (e) => {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    if (pageNum !== this.state.index) {
      this.setState({ index: pageNum });
    }
  }

  getItemLayout = (data, index) => {
    return {
      length: Dimensions.get('window').width,
      offset: Dimensions.get('window').width * index,
      index,
    };
  }

  goTo({ index, animated = true }, next) {
    this.setState({
      index,
    }, next);

    this.swiper.scrollToIndex({ index, animated });
  }

  handleOnPressImage = (index) => {
    this.goTo({ index, animated: false }, () => {
      Animated.spring(this.scale, {
        toValue: 1,
        duration: ANIMATION_DURATION,
      }).start();

      Animated.spring(this.pagination, {
        toValue: 1,
        duration: ANIMATION_DURATION,
      }).start();
    });
  };

  handleOnPressOutside = () => {
    Animated.timing(this.scale, {
      toValue: 0,
      duration: ANIMATION_DURATION / 2,
    }).start();

    Animated.timing(this.pagination, {
      toValue: 0,
      duration: ANIMATION_DURATION / 2,
    }).start();
  };

  renderItem = (item) => (
    <Slide
      {...item}
      onPressOutside={this.handleOnPressOutside}
    />
  );

  render() {
    const {
      backgroundColor,
      data,
      initialNumToRender,
      initialPaginationSize,
    } = this.props;

    const listContainerStyle = {
      ...StyleSheet.absoluteFillObject,
      backgroundColor,
      position: 'absolute',
      opacity: this.scale,
      transform: [
        {
          scale: this.scale.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      ],
    };

    return (
      <View
        orientation={this.state.orientation}
        style={styles.container}
      >
        {!data.length &&
          <ActivityIndicator style={styles.loader} />}

        <GalleryList
          {...this.props}
          onPressImage={this.handleOnPressImage}
        />

        <Animated.View style={listContainerStyle}>
          <FlatList
            style={styles.swiper}
            data={data}
            initialNumToRender={initialNumToRender}
            ref={ref => this.swiper = ref}
            pagingEnabled={true}
            horizontal={true}
            onMomentumScrollEnd={this.onScrollEnd}
            getItemLayout={this.getItemLayout}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        </Animated.View>

        <Pagination
          index={this.state.index}
          data={data}
          initialPaginationSize={initialPaginationSize}
          goTo={this.goTo}
          backgroundColor={backgroundColor}
          containerStyle={{
            transform: [
              {
                translateY: this.pagination.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
          }}
        />
      </View>
    );
  }
}

Gallery.propTypes = {
  backgroundColor: PropTypes.string,
  data: PropTypes.arrayOf((propValue, key) => {
    if (!propValue[key].id || !propValue[key].image) {
      return new Error(
        'Data prop is invalid. It must be an object containing "id" and "image" keys.'
      );
    }
  })
};

const styles = {
  container: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    top: (Dimensions.get('window').height / 2) - 10,
    left: (Dimensions.get('window').width / 2) - 10,
  },
  swiper: {
    top: -32,
  }
};
