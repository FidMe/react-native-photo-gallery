import { Dimensions, Platform, FlatList, StyleSheet } from "react-native";
import React, { Component } from "react";
import SwiperThumb from "./SwiperThumb";

export class Pagination extends Component {
  constructor(props) {
    super(props);
    this.setContentInset();
  }

  componentDidUpdate() {
    this.scrollTo(this.props.index);
    this.setContentInset();
  }

  scrollTo = index => {
    if (index < 0) return;
    this.list.scrollToIndex({ animated: true, index });
  };

  setContentInset() {
    this.contentInset = Dimensions.get("window").width / 2 - 32;
    this.insetOffSetParams = Platform.select({
      ios: {
        contentInset: {
          left: this.contentInset,
          right: this.contentInset
        },
        contentOffset: { x: -this.contentInset },
        contentContainerStyle: s.subContainer
      },
      android: {}
    });
  }

  navigate = index => {
    this.props.goTo(index);
  };

  renderItem = ({ item, index }) => {
    return (
      <SwiperThumb
        {...item}
        key={item.id}
        data={this.props.data}
        active={index == this.props.index}
        navigate={() => this.navigate(index)}
        index={index}
      />
    );
  };

  render() {
    return (
      <FlatList
        horizontal
        ref={flatList => {
          this.list = flatList;
        }}
        initialScrollIndex={0}
        data={this.props.data}
        renderItem={this.renderItem}
        getItemLayout={(data, index) => ({
          length: 64,
          offset: 64 * index,
          index
        })}
        style={[
          s.container,
          {
            backgroundColor: this.props.backgroundColor,
            width: Dimensions.get("window").width
          }
        ]}
        overScrollMode="never"
        alwaysBounceHorizontal={false}
        {...this.insetOffSetParams}
      />
    );
  }
}

const isIphoneXorAbove = () => {
  const d = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    (d.height === 812 || d.width === 812 || d.height === 896 || d.width === 896)
  );
};

const s = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: isIphoneXorAbove() ? 30 : 0,
    height: 64
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
