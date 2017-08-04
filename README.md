
# react-native-photo-library

## Getting started

`$ npm install react-native-photo-library --save`

### Mostly automatic installation

`$ react-native link react-native-photo-library`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-photo-library` and add `RNPhotoLibrary.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNPhotoLibrary.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNPhotoLibraryPackage;` to the imports at the top of the file
  - Add `new RNPhotoLibraryPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-photo-library'
  	project(':react-native-photo-library').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-photo-library/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-photo-library')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNPhotoLibrary.sln` in `node_modules/react-native-photo-library/windows/RNPhotoLibrary.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Com.Reactlibrary.RNPhotoLibrary;` to the usings at the top of the file
  - Add `new RNPhotoLibraryPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNPhotoLibrary from 'react-native-photo-library';

// TODO: What to do with the module?
RNPhotoLibrary;
```
  