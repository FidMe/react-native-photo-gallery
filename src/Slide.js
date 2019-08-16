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
import { Metadata } from "./Metadata";

const styles = {
  slideC: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollViewC: {
    alignItems: "center",
    top: Platform.OS === "android" ? -32 : 30,
    justifyContent: "center"
  },
  loader: {
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 10,
    left: Dimensions.get("window").width / 2 - 10
  },

  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 128
  }
};

const Slide = ({ image, createdAt, uploadedBy, fileName }) => {
  const inside = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 128
  };
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
          <Metadata
            createdAt={createdAt}
            uploadedBy={uploadedBy}
            fileName={fileName}
          />
          <Image source={image} style={styles.image} resizeMode="contain" />
        </ScrollView>
      )}
    </View>
  );
};

export { Slide };
