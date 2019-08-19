import React, { Component } from "react";
import { Dimensions, Text, View } from "react-native";

const styles = {
  container: {
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    height: 100,
    opacity: 0.6,
    padding: 20,
    zIndex: 1
  },
  imgText: {
    color: "white"
  }
};

class Metadata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get("window").width
    };
    this.rotationEventListener = Dimensions.addEventListener(
      "change",
      this.onLayout
    );
  }

  onLayout = e => {
    const { width } = Dimensions.get("window");
    this.setState({
      width
    });
  };

  componentWillUnmount() {
    Dimensions.removeEventListener("change");
  }

  render() {
    const { width } = this.state;
    const { fileName, createdAt, uploadedBy } = this.props;
    return (
      <View
        style={{ width, ...styles.container }}
        accessible={true}
        accessibilityLabel={fileName}
        accessibilityHint="single image for item"
        testID={fileName}
      >
        <Text style={[styles.imgText, { fontWeight: "bold" }]}>{fileName}</Text>
        {createdAt != undefined && (
          <Text style={styles.imgText}>Uploaded at: {createdAt}</Text>
        )}
        {uploadedBy != " " && (
          <Text style={styles.imgText}>Uploaded by: {uploadedBy}</Text>
        )}
      </View>
    );
  }
}

export { Metadata };
