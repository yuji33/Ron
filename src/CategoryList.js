import { ListItem, Icon } from 'react-native-elements'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ShopList from './ ShopList';

export default function CategoryList () {
    const Stack = createStackNavigator();
    const list = [
        {
          title: 'カテゴリー1',
          icon: 'set-meal'
        },
        {
          title: 'カテゴリー2',
          icon: 'liquor'
        },
        {
            title: 'カテゴリー3',
            icon: 'cake'
        },
        {
          title: 'カテゴリー4',
          icon: 'bakery-dining'
        },
        {
          title: 'カテゴリー5',
          icon: 'bakery-dining'
        },
        {
          title: 'カテゴリー6',
          icon: 'bakery-dining'
        },
      ]
return (
    <Stack.Navigator
    screenOptions={{
      headerMode: 'screen',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'tomato' },
    }}
    >
  {
    list.map((item, i) => (
      　<Stack.Screen
        name={item.title}
        component={ShopList}
        options={{
          title: 'Awesome app',
        }}
        />
    ))
  }
   </Stack.Navigator>
);
}


 
// const Stack = createStackNavigator();

// function MyStack() {
//   return (
    
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           title: 'Awesome app',
//         }}
//       />
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           title: 'My profile',
//         }}
//       />
//       <Stack.Screen
//         name="Settings"
//         component={Settings}
//         options={{
//           gestureEnabled: false,
//         }}
//       />
//     </Stack.Navigator>
//   );
