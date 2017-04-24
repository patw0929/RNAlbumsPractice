/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const styles = {
  wrapper: {
    flex: 1,
  },
};

export default class RNAlbumsPractice extends Component {
  render() {
    return (
      <View style={ styles.wrapper } accessibilityLabel="Index">
        <Header title="Albums" accessibilityLabel="Header" />

        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('RNAlbumsPractice', () => RNAlbumsPractice);
