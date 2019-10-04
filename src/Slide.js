import React from "react";
import { Platform, Image, View, ScrollView, Dimensions } from "react-native";
import PhotoView from "react-native-photo-view";
import PropTypes from "prop-types";

const Slide = ({ item }) => {
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
        <View style={styles.scrollViewContainer}>
          <PhotoView
            source={item.image}
            maximumZoomScale={4}
            zoomScale={1}
            androidScaleType="center"
            resizeMode="contain"
            style={[styles.scrollViewC, inside]}
          />
        </View>
      ) : (
        <ScrollView
          maximumZoomScale={4}
          zoomScale={1}
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={item.image}
            accessible={true}
            style={styles.inside}
            resizeMode="contain"
          />
        </ScrollView>
      )}
    </View>
  );
};

Slide.propTypes = {
  item: PropTypes.object.isRequired
};

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
  inside: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 128
  }
};

export { Slide };
