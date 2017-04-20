import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
        <AlbumDetail
          key={album.title}
          album={album}
        />
      );
    });
  }

  render() {
    return (
      <ScrollView accessibilityLabel="AlbumList">
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
