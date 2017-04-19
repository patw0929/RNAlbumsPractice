import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card/Card';
import CardSection from './Card/CardSection';

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={{ uri: album.thumbnail_image }}
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={styles.image}
          source={{ uri: album.image }}
        />
      </CardSection>
    </Card>
  );
};

AlbumDetail.displayName = 'AlbumDetail';

const styles = {
  wrapper: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
  },
  image: {
    width: null,
    height: 300,
    flex: 1,
  }
};

export default AlbumDetail;
