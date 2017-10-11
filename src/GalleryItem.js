import React, { PureComponent } from 'react';
import {
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from 'react-native';

class GalleryItem extends PureComponent {
  render() {
    const {
      image,
      imageSize,
      marginBottom,
      marginRight,
      onPress,
    } = this.props;

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          source={image}
          style={[
            styles.container,
            {
              width: imageSize,
              height: imageSize,
              marginBottom,
              marginRight,
            },
          ]}
        />
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
  },
});

export default GalleryItem;
