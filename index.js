import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  View,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination, Slide } from './src';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], index: 0 };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: this.props.data });
    }, 400);
  }

  onScrollEnd(e) {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    if (pageNum !== this.state.index) {
      this.setState({ index: pageNum });
    }
  }

  getItemLayout(data, index) {
    return {
      length: Dimensions.get('window').width,
      offset: Dimensions.get('window').width * index,
      index,
    };
  }

  goTo(index) {
    this.setState({ index });
    this.swiper.scrollToIndex({ index });
  }

  render() {
    const backgroundColor = this.props.backgroundColor || '#000';
    return (
      <View style={{ ...styles.container, backgroundColor }}>
        {!this.state.data.length &&
          <ActivityIndicator style={styles.loader} />}

        <FlatList
          style={styles.swiper}
          data={this.state.data}
          horizontal
          initialNumToRender={4}
          ref={ref => this.swiper = ref}
          pagingEnabled
          onMomentumScrollEnd={this.onScrollEnd.bind(this)}
          getItemLayout={this.getItemLayout.bind(this)}
          renderItem={img => <Slide {...img} />}
          keyExtractor={item => item.id}
        />
        <Pagination
          index={this.state.index}
          data={this.state.data}
          goTo={this.goTo.bind(this)}
          backgroundColor={backgroundColor}
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
        'Data prop is invalid. It must be an object containing "id" and "data" keys.'
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
