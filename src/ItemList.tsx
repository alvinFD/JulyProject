import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native"


const ItemList = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const { item_List } = route.params;
  //Alert.alert(typeof(item_List))
  //Alert.alert(JSON.stringify(item_List))
  function itemclicked (item_detail: any) {
    navigation.navigate('ItemDetail',{item_detail})
    //Alert.alert(JSON.stringify(item_detail))

};

  return (
    <View style={{flex: 1, padding: 24}}>
        <FlatList
          data={item_List}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={()=>itemclicked(item)}>
              <Text style={{lineHeight: 60, fontSize: 40}}>
                {item.name}
              </Text>
            </TouchableOpacity>

          )}
        />
      
    </View>
  );
}

export default ItemList;