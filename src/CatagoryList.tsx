import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { Assignment} from './Styles';
import { useNavigation } from "@react-navigation/core";


const CatagoryList = () => {
  const [, setLoading] = useState(true);
  const [data, setData] = useState<Assignment[]>([]);
  const navigation = useNavigation()

  const getAssignment = async () => {
    try {
      const response = await fetch('http://dev.prismcubehk.com/hkcsd/index.php/api/visitStatusHandInArticles/getAll?lang=tc');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    } 
  };

  function itemNameclicked (item_List: any) {
    navigation.navigate('ItemList',{item_List})

};



  useEffect(() => {
    getAssignment();
  }, []);

  const keys = Object.keys(data);

  const keyList = [];
  
  for (let i = 0; i < keys.length; i++) {
    keyList.push(
      <TouchableOpacity key={keys[i]} onPress={() => itemNameclicked(data[keys[i]].items)}>
        <Text style={{lineHeight: 60, fontSize: 40}}>{data[keys[i]].category.name}</Text>
      </TouchableOpacity>
    );
  }
  
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>{keyList}</View>
  );
};

export default CatagoryList;