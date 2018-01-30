
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
      {
        id: 'first image',
        image: require('./yourImage.jpg'),
        thumb: require('./yourImageThumb.jpg'),
        overlay: <Overlay />
      },
      {
        id: 'Second image',
        image: require('./yourImage2.jpg'),
        thumb: require('./yourImageThumb2.jpg'),
        overlay: <OtherOverlay />
      }
    ];

    return <Gallery data={data} />;
  }
}
```

It is up to you to render a header, navigation bar, etc.

| Props             | Type            | Description                                                                                |
|-------------------|-----------------|--------------------------------------------------------------------------------------------|
| `backgroundColor` | `String`        | Changing the background color of gallery and pagination                                    |
| `data`            | Array of object | See `Data` below |
| `initialPaginationSize`            | `Number` | Default to 10 |
| `initialNumToRender`            | `Number` | Default to 4 |
| `initialIndex`            | `Number` | Default to 0 |
| `overlay`            | `Component` | If present, a view that will be displayed above the image |

## Data object

Data prop an array objects that will configure slides.
You can provide the following props.

| Key             | Type            | Required   | Description |
|-------------------|-----------------|--------------------------------------------------------------------------------------------|----|
| `id` | `String`        | Yes | A unique identifier
| `image`            | `Image source` | Yes | See `<Image source={}/>` on react native documentation. |
| `thumb`            | `Image source` | No | Will be used as a thumbnail on pagination, will default to `image`if not provided |
| `overlay`            | `Component` | No | A view that will be displayed above the image, for metas infos for example |
