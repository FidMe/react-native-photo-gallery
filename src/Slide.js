import React from "react";
import { Platform, Image, View, ScrollView } from "react-native";
import PhotoView from "react-native-photo-view";
import PropTypes from "prop-types";
import { Metadata } from "./Metadata";

const Slide = props => {
  const { image, createdAt, uploadedBy, fileName, width, height } = props;
  return (
    <View style={{ ...styles.container, width, height }}>
      {width < height && (
        <Metadata
          createdAt={createdAt}
          uploadedBy={uploadedBy}
          fileName={fileName}
        />
      )}
      {Platform.OS === "android" ? (
        <View style={styles.scrollViewContainer}>
          <PhotoView
            source={image}
            maximumZoomScale={4}
            zoomScale={1}
            androidScaleType="center"
            resizeMode="contain"
            style={{ width, height: height - 128 }}
            accessibilityLabel={`img-${fileName}`}
            accessibilityHint="single item image"
            testID={`img-${fileName}`}
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
            source={image}
            accessible={true}
            style={{
              width,
              height
            }}
            accessibilityLabel={`img-${fileName}`}
            accessibilityHint="single item image"
            testID={`img-${fileName}`}
            resizeMode="center"
          />
        </ScrollView>
      )}
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
