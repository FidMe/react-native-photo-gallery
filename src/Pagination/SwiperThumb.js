import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';

class SwiperThumb extends Component {
  goToSlide() {
    this.props.navigate(this.props.index);
  }

  render() {
    return (
      <TouchableOpacity
        style={s.container}
        onPress={this.goToSlide.bind(this)}
      >
        <Image
          style={{ ...s.thumb, opacity: this.props.active ? 1 : 0.6 }}
          source={this.props.data[this.props.index].thumb||this.props.data[this.props.index].image}
        />
      </TouchableOpacity>
    );
  }
}

const s = {
  container: {
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
  thumb: {
    width: 64,
    height: 64,
  }
};

export default SwiperThumb;
