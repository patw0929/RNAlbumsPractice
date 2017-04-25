import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

const styles = {
  wrapper: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  title: {
    fontSize: 20,
  },
};

const Header = (props) => {
  return (
    <View style={ styles.wrapper } accessibilityLabel="Header">
      <Text style={ styles.title }>{props.title}</Text>
    </View>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
