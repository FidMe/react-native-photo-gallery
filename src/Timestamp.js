import React from "react";
import { Text, View } from "react-native";

const styles = {
  container: {
    backgroundColor: "black",
    opacity: 0.3
  },
  createdAt: {}
};

const Timestamp = ({ createdAt }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.createdAt}>{createdAt}</Text>
    </View>
  );
};

export { Timestamp };
