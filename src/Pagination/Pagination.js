import { Dimensions, Platform } from 'react-native';
import React, { Component } from 'react';

import SwiperThumb from './SwiperThumb';
import BetterList from '../BetterList';

export class Pagination extends Component {
  constructor(props) {
    super(props);
    this.setContentInset()
  }

  componentDidUpdate() {
    this.list.pagination.scrollTo({ x: ((this.props.index * 64) - this.contentInset) });
    this.setContentInset();
  }

  setContentInset() {
    this.contentInset = (Dimensions.get('window').width / 2) - 32;
    this.insetOffSetParams = Platform.select({
      ios: {
        contentInset: { left: this.contentInset, right: this.contentInset },
        contentOffset: { x: -this.contentInset },
        contentContainerStyle: s.subContainer,
      },
      android: {}
    });
  }

  navigate(index) {
    this.props.goTo(index);
  }

  render() {
    return (
      <BetterList
        horizontal
        ref={sc => this.list = sc}
        data={this.props.data}
        renderRow={(item, i, index) =>
          <SwiperThumb
            {...item}
            key={index}
            data={this.props.data}
            active={index == this.props.index}
            navigate={this.navigate.bind(this, index)}
            index={index}
          />
        }
        style={[
          s.container,
          {
            backgroundColor: this.props.backgroundColor,
            width: Dimensions.get('window').width,
          }
        ]}
        overScrollMode="never"
        alwaysBounceHorizontal={false}
        {...this.insetOffSetParams}
      />
    );
  }
}

const s = {
  container: {
    position: 'absolute',
    bottom: 0,
    height: 64,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
};
