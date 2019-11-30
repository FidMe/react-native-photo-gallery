import React, { Component } from 'react';
import { FlatList, Image } from 'react-native';

export default class BetterList extends Component {
  constructor(props) {
    super(props);
  }

  renderItem({ item, index }) {
    return <Image source={item.image}></Image>
    }

  render() {
    return (
      <FlatList
      data={this.props.data}
      renderItem={this.renderItem}
     />
    );
  }
}
