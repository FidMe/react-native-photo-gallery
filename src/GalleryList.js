import React, { PureComponent } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Easing,
  Animated,
} from 'react-native';

import GalleryItem from './GalleryItem';

const { width } = Dimensions.get('window');

class GalleryList extends PureComponent {
  constructor(props) {
    super(props);

    const { imageMargin, imagesPerRow } = props;

    this.state = {
      imageSize: width / imagesPerRow,
    };
  }

  handleShowImageFullscreen = ({ index }) => (event) =>
    this.props.onPressImage(index, event);

  renderItem = (row) => {
    const { imageSize } = this.state;
    const { imageMargin, imagesPerRow } = this.props;

    return (
      <GalleryItem
        {...row.item}
        imageSize={imageSize}
        marginBottom={imageMargin}
        marginRight={(row.index + 1) % imagesPerRow !== 0 ? imageMargin : 0}
        onPress={this.handleShowImageFullscreen(row)}
      />
    );
  };

  render() {
    const { data, imagesPerRow } = this.props;

    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
        numColumns={imagesPerRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
  },
});

export default GalleryList;
