import React from "react";
import { Dimensions, Text, View } from "react-native";

const styles = {
  container: {
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
    height: 100,
    opacity: 0.6,
    padding: 20,
    zIndex: 1
  },
  imgText: {
    color: "white"
  }
};

const Metadata = ({ fileName, uploadedBy, createdAt }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.imgText, { fontWeight: "bold" }]}>{fileName}</Text>
      {createdAt != undefined && (
        <Text style={styles.imgText}>Uploaded at: {createdAt}</Text>
      )}
      {uploadedBy != undefined && (
        <Text style={styles.imgText}>Uploaded by: {uploadedBy}</Text>
      )}
    </View>
  );
};

export { Metadata };
