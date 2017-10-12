import React, { PureComponent } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

class Loading extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
