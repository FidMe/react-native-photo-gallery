import { ActivityIndicator, Dimensions, FlatList, View } from "react-native";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Pagination, Slide } from "./src";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.props.setCurrentImage(this.props.data[0]);
    this.state = { index: 0 };
    if (this.props.initialIndex) {
      setTimeout(() => {
        this.goTo(this.props.initialIndex);
      }, 100);
    }
  }

  onScrollEnd = e => {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    if (pageNum !== this.state.index) {
      this.setState({ index: pageNum });
    }
  };

  getItemLayout = (data, index) => {
    return {
      length: Dimensions.get("window").width,
      offset: Dimensions.get("window").width * index,
      index
    };
  };

  goTo = index => {
    this.props.setCurrentImage(this.props.data[index]);
    this.setState({ index });
    this.swiper.scrollToIndex({
      index: Number(index)
    });
  };

  _renderImage = item => <Slide {...item} />;

  render() {
    const backgroundColor = this.props.backgroundColor || "#000";
    const data = this.props.data || [];
    return (
      <View
        onLayout={this.onLayout}
        style={{
          ...styles.container,
          backgroundColor
        }}
      >
        {!data.length && <ActivityIndicator style={styles.loader} />}
        <FlatList
          onLayout={this.onLayout}
          style={styles.flatList}
          data={data}
          extraData={this.state}
          horizontal
          initialNumToRender={this.props.initialNumToRender || 4}
          ref={ref => (this.swiper = ref)}
          pagingEnabled
          onMomentumScrollEnd={this.onScrollEnd}
          getItemLayout={this.getItemLayout}
          renderItem={img => this._renderImage(img)}
          keyExtractor={item => item.id}
        />
        <Pagination
          index={this.state.index}
          data={data}
          initialPaginationSize={this.props.initialPaginationSize || 10}
          goTo={this.goTo}
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
        'Data prop is invalid. It must be an object containing "id" and "image" keys.'
      );
    }
  }),
  setCurrentImage: PropTypes.func
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  flatList: {
    flex: 1,
    alignSelf: "stretch"
  },
  loader: {
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 10,
    left: Dimensions.get("window").width / 2 - 10
  }
};
