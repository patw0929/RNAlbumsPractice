import React, { PropTypes } from 'react';
import { View } from 'react-native';

const styles = {
  wrapper: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

const Card = (props) => {
  return (
    <View style={ styles.wrapper } accessibilityLabel="AlbumDetail">
      {props.children}
    </View>
  );
};

Card.displayName = 'Card';

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Card.defaultProps = {
  children: null,
};

export default Card;
