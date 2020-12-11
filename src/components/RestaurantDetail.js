import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {detailStyle} from '../styles';

const RestaurantDetail = (props) => {
  function showPrice(length) {
    const priceLabel = [];
    for (let i = 0; i < length; i++) {
      priceLabel.push(
        <Icon key={i} name="currency-usd" size={20} color="green" />,
      );
    }

    return priceLabel;
  }
  return (
    <Modal
      isVisible={props.isVisible}
      style={{justifyContent: 'flex-end', margin: 0, marginHorizontal: 10}}
      onBackdropPress={props.onClose}
      swipeDirection="up"
      onSwipeComplete={props.onClose}>
      <View style={detailStyle.container}>
        <Text style={detailStyle.name}>{props.restaurant.name}</Text>
        <Text style={detailStyle.address}>
          {props.restaurant.area} {props.restaurant.address}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="phone" size={20} />
            <Text style={detailStyle.phone}>+{props.restaurant.phone}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {showPrice(props.restaurant.price)}
          </View>
        </View>
        {/* <ScrollView horizontal>
          {[1,2,3,4].map((i) => (
            <View>
              <Image source={{uri:}} />
            </View>
          ))} 

        </ScrollView> */}
        <Text style={detailStyle.modalText}>
          The chapter explains the philosophy underlying our course in
          macroeconomics. In particular, it explains why we have divided the
          main body of the text intou two Books. one concerned with the long
          run, and another one dealing with the short run. Reading this chapter
          will help you to understand the links between the following chapters
          and to see where the material in each individual chapter fitsiyui into
          the big scheme. In addition, this chapter presents some important
          concepts and elements of macroeconomic models which we will use
          repeatedly in later chapters. We start by discussing how to define
          macroeconomics. We then go on to explain why it is useful to develop
          separate macroeconomic theories lor the long run and for the short
          run. Finally, we end the chapter by summing up the dillerent
          assumptions underlying macroeconomic models for the short run versus
          macro models for the long run.
        </Text>
      </View>
    </Modal>
  );
};

export {RestaurantDetail};
