import React, { Component } from 'react';
import { TouchableOpacity, ListView, Image, Dimensions } from 'react-native';
import { catalogs } from '../datas';

class ListComponent extends Component {
  static navigationOptions = {
    title: 'Liste des catalogues',
  };

  showCatalog() {
    this.props.navigation.navigate('Catalog');
  }

  render() {
    return (
      <ListView
        dataSource={catalogs}
        contentContainerStyle={s.container}
        initialListSize={30}
        renderRow={(catalog) => {
          return (
            <TouchableOpacity onPress={this.showCatalog.bind(this)} style={s.singleCatalog}>
              <Image style={{ width: 100, height: 80 }} source={catalog.image} />
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}

const s = {
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingTop: 20,
  },
  singleCatalog: {
    width: Dimensions.get('window').width / 3,
    height: 100,
    alignItems: 'center',
  },
};

export const List = ListComponent;
