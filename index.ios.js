/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class RNAlbumsPractice extends Component {
  render() {
    return (
      <View>
        <Header title="Albums" />

        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('RNAlbumsPractice', () => RNAlbumsPractice);
