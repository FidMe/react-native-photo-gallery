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

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height
    };
    this.rotationEventListener = Dimensions.addEventListener(
      "change",
      this.onLayout
    );
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change");
  }

  onLayout = e => {
    const { height, width } = Dimensions.get("window");
    this.setState({
      width,
      height
    });
  };

  render() {
    const { image, createdAt, uploadedBy, fileName } = this.props;
    const { width, height } = this.state;
    const inside = {
      width,
      height: height - 128
    };

    return (
      <View
        style={[
          styles.slideC,
          {
            width,
            height
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
            style={inside}
            contentContainerStyle={[styles.scrollViewC, inside]}
          >
            <Metadata
              createdAt={createdAt}
              uploadedBy={uploadedBy}
              fileName={fileName}
            />
            <Image
              source={image}
              style={inside}
              accessible={true}
              accessibilityLabel={`img-${fileName}`}
              accessibilityHint="single item image"
              testID={`img-${fileName}`}
              resizeMode="contain"
            />
          </ScrollView>
        )}
      </View>
    );
  }
}

export { Slide };
