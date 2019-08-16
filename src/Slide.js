import React, { Component } from "react";
import {
  Platform,
  Image,
  ActivityIndicator,
  Dimensions,
  View,
  ScrollView
} from "react-native";
import PhotoView from "react-native-photo-view";
import { Timestamp } from "./Timestamp";

const styles = {
  slideC: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollViewC: {
    alignItems: "center",
    top: Platform.OS === "android" ? -32 : 70,
    justifyContent: "center"
  },
  loader: {
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 10,
    left: Dimensions.get("window").width / 2 - 10
  },
  timestamp: {
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
    height: 80
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 128
  }
};

export class Slide extends Component {
  render() {
    const inside = {};
    const { image, overlay } = this.props.item;
    return (
      <View
        style={[
          styles.slideC,
          {
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height
          }
        ]}
      >
        <Timestamp createdAt="9/10/11" style={styles.timestamp} />
        <ActivityIndicator style={styles.loader} />
        {Platform.OS === "android" ? (
          <PhotoView
            source={image}
            maximumZoomScale={3}
            zoomScale={1}
            androidScaleType="center"
            resizeMode="contain"
            style={[styles.scrollViewC, inside]}
          />
        ) : (
          <ScrollView
            maximumZoomScale={3}
            zoomScale={1}
            style={[{ flex: 1 }, inside]}
            contentContainerStyle={[styles.scrollViewC, inside]}
          >
            <Image source={image} style={styles.image} resizeMode="contain" />
          </ScrollView>
        )}
        {overlay}
      </View>
    );
  }
}
