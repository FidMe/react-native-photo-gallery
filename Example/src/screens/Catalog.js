import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import React, { Component } from 'react';

import { Pagination, Slide } from '../components';

export class Catalog extends Component {
  static navigationOptions = {
    title: 'Catalogue',
  };

  constructor(props) {
    super(props);
    this.state = { data: [], index: 0 };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: require('../datas').data });
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
    return (
      <View style={styles.container}>
        {!this.state.data.length &&
          <ActivityIndicator style={styles.loader} />}

        <FlatList
          style={styles.swiper}
          data={this.state.data}
          horizontal
          initialNumToRender={1}
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
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
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
});
