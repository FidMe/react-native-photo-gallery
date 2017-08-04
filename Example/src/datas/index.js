import { ListView } from 'react-native';

export const data = [
  { id: '901', image: require('./14612-TABLOID-35-GM_01.jpg') },
  { id: '902', image: require('./14612-TABLOID-35-GM_02.jpg') },
  { id: '903', image: require('./14612-TABLOID-35-GM_03.jpg') },
  { id: '904', image: require('./14612-TABLOID-35-GM_04.jpg') },
  { id: '905', image: require('./14612-TABLOID-35-GM_05.jpg') },
  { id: '906', image: require('./14612-TABLOID-35-GM_06.jpg') },
  { id: '07', image: require('./14612-TABLOID-35-GM_07.jpg') },
  { id: '08', image: require('./14612-TABLOID-35-GM_08.jpg') },
  { id: '09', image: require('./14612-TABLOID-35-GM_09.jpg') },
  { id: '10', image: require('./14612-TABLOID-35-GM_10.jpg') },
  { id: '12', image: require('./14612-TABLOID-35-GM_12.jpg') },
  { id: '13', image: require('./14612-TABLOID-35-GM_13.jpg') },
  { id: '14', image: require('./14612-TABLOID-35-GM_14.jpg') },
  { id: '15', image: require('./14612-TABLOID-35-GM_15.jpg') },
  { id: '16', image: require('./14612-TABLOID-35-GM_16.jpg') },
  { id: '17', image: require('./14612-TABLOID-35-GM_17.jpg') },
  { id: '18', image: require('./14612-TABLOID-35-GM_18.jpg') },
  { id: '19', image: require('./14612-TABLOID-35-GM_19.jpg') },
  { id: '20', image: require('./14612-TABLOID-35-GM_20.jpg') },
  { id: '21', image: require('./14612-TABLOID-35-GM_21.jpg') },
  { id: '22', image: require('./14612-TABLOID-35-GM_22.jpg') },
  { id: '23', image: require('./14612-TABLOID-35-GM_23.jpg') },
  { id: '24', image: require('./14612-TABLOID-35-GM_24.jpg') },
  { id: '25', image: require('./14612-TABLOID-35-GM_25.jpg') },
  { id: '26', image: require('./14612-TABLOID-35-GM_26.jpg') },
  { id: '27', image: require('./14612-TABLOID-35-GM_27.jpg') },
  { id: '28', image: require('./14612-TABLOID-35-GM_28.jpg') },
];


const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
export const catalogs = ds.cloneWithRows(data);
