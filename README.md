
# react-native-photo-gallery

![Demo image](https://s3-eu-west-1.amazonaws.com/michaelvilleneuve/uploads/demo.gif)

This library is a very simple, yet powerfull gallery component.
It provides a native similar gallery including horizontal swiper, photo view, zoom, and pagination.
Tested without stutters with 1000+ images.

## Getting started

`$ npm install react-native-photo-gallery --save`

This library depends on react-native-photo-view to display images on Android. So you must also do the following :

`$ react-native link react-native-photo-view`

## Usage
```javascript
import Gallery from 'react-native-photo-gallery';

class YourGalleryComponent extends Component {
  render() {
    const data = [
      { id: 'first image', image: require('./yourImage.jpg')  }
      { id: 'Second image', image: require('./yourImage2.jpg')  }
    ];

    return <Gallery data={data} />;
  }
}
```

It is up to you to render a header, navigation bar, etc.

| Props             | Type            | Description                                                                                |
|-------------------|-----------------|--------------------------------------------------------------------------------------------|
| `backgroundColor` | `String`        | Changing the background color of gallery and pagination                                    |
| `data`            | Array of object | Must match the following format `{ id: uniqueKey, image: (cf react-native image source) }` |
