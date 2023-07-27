import React from 'react';
import { View, Text, Image, ScrollView, Alert } from 'react-native';
import {Styles} from './Styles';

function ItemDetail({ route }) {
  const { item_detail } = route.params;
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <Image source={{uri: item_detail.image}}style={{width: 200, height: 200}}/>
      <Text style={Styles.detail_topic}>{item_detail.name}</Text>
      <Text style={Styles.detail_content}>{item_detail.description}</Text>
    </ScrollView>
  );
}

export default ItemDetail;