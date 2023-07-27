import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './SignIn'
import CatagoryList from './CatagoryList'
import ItemList from './ItemList'
import ItemDetail from './ItemDetail'


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="CatagoryList" component={CatagoryList}/>
        <Stack.Screen name="ItemList" component={ItemList}/>
        <Stack.Screen name="ItemDetail" component={ItemDetail}/>
      </Stack.Navigator>
        
    </NavigationContainer>
  );
};
export default MyStack