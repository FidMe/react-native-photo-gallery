import React, { Component } from 'react';
import { ListView } from 'react-native';

export default class BetterList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        return r1 !== r2;
      }
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.data)
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ dataSource: this.ds.cloneWithRows(props.data) });
  }

  render() {
    return (
      <ListView
       {...this.props}
       ref={sc => this.pagination = sc}
       initialListSize={this.props.initialPaginationSize}
       dataSource={this.state.dataSource}
      />
    );
  }
}
