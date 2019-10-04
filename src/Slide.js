import React from "react";
import { Dimensions, Platform, Image, View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { Metadata } from "./Metadata";

const Slide = ({ item }) => {
  const inside = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 128
  };
  const { createdAt, uploadedBy, fileName } = item;
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
      <Metadata
        createdAt={createdAt}
        uploadedBy={uploadedBy}
        fileName={fileName}
      />
      <ScrollView
        maximumZoomScale={4}
        zoomScale={1}
        style={[{ flex: 1 }, inside]}
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={image}
          style={inside}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={`img-${fileName}`}
          accessibilityHint="single item image"
          testID={`img-${fileName}`}
        />
      </ScrollView>
    </View>
  );
};

Slide.propTypes = {
  image: PropTypes.object.isRequired,
  createdAt: PropTypes.string,
  uploadedBy: PropTypes.string,
  fileName: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

const styles = {
  container: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  scrollViewContainer: {
    flex: 1,
    marginBottom: 150,
    alignItems: "center",
    justifyContent: "center"
  }
};

export { Slide };
