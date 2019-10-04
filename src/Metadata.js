import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const Metadata = ({ fileName, createdAt, uploadedBy }) => {
  return (
    <View
      style={styles.container}
      accessible
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
};

Metadata.propTypes = {
  fileName: PropTypes.string,
  createdAt: PropTypes.string,
  uploadedBy: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignSelf: "stretch",
    height: 100,
    opacity: 0.6,
    padding: 20,
    zIndex: 1
  },
  imgText: {
    color: "white"
  }
});

export { Metadata };
