import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const SwiperThumb = ({ navigate, index, data, active }) => {
  goToSlide = () => {
    navigate(index);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToSlide}>
      <Image
        style={{ ...styles.thumb, opacity: active ? 1 : 0.6 }}
        source={data[index].thumb || data[index].image}
      />
    </TouchableOpacity>
  );
};

SwiperThumb.propTypes = {
  navigate: PropTypes.func,
  index: PropTypes.number,
  active: PropTypes.boolean,
  data: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    width: 64,
    justifyContent: "center",
    alignItems: "center",
    height: 64
  },
  thumb: {
    width: 64,
    height: 64
  }
});

export default SwiperThumb;
