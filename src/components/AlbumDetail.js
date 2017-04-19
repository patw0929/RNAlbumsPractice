import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card/Card';
import CardSection from './Card/CardSection';
import Button from './Button/Button';

const AlbumDetail = ({ album }) => {
  const {
    thumbnail_image,
    title,
    artist,
    image,
  } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button />
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
