import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const API_URL = 'https://rallycoding.herokuapp.com/api/music_albums';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    axios.get(API_URL)
      .then(res => {
        const data = res.data || [];

        this.setState({
          albums: data,
        });
      });
  }

  renderAlbums() {
    const { albums } = this.state;

    if (!albums) return null;

    return albums.map(album => {
      return (
        <View>
          <Text>{album.title}</Text>
        </View>
      );
    });
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}
