import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Click Me!</Text>
    </TouchableOpacity>
  );
};

Button.displayName = 'Button';

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
  }
};

export default Button;
