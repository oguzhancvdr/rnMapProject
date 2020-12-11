import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {cityStyle} from '../styles';

const City = (props) => {
  return (
    <TouchableOpacity style={cityStyle.container} onPress={props.onSelect}>
      <Icon name="city-variant-outline" size={15} color="#424242" />
      <Text style={cityStyle.text}> {props.cityName}</Text>
    </TouchableOpacity>
  );
};

export {City};
