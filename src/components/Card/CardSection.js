import React, { PropTypes } from 'react';
import { View } from 'react-native';

const styles = {
  wrapper: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

const CardSection = (props) => {
  return (
    <View style={ styles.wrapper }>
      {props.children}
    </View>
  );
};

CardSection.displayName = 'CardSection';

CardSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

CardSection.defaultProps = {
  children: null,
};

export default CardSection;
