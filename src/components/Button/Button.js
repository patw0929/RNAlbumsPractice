import React, { PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = {
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

const Button = (props) => {
  return (
    <TouchableOpacity
      style={ styles.button }
      onPress={ props.onPress }
      accessibilityLabel="Button"
      testID="ButtonTest"
    >
      <Text style={ styles.text }>{props.children}</Text>
    </TouchableOpacity>
  );
};

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: null,
};

export default Button;
