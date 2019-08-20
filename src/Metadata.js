import React, { Component } from "react";
import { Dimensions, Platform, Text, View } from "react-native";

const Metadata = ({ fileName, createdAt, uploadedBy }) => (
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

const styles = {
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
};

export { Metadata };
