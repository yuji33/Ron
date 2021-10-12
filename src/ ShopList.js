import { createStackNavigator } from '@react-navigation/stack';
import { ListItem, Icon } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ShopList () {
return (
   list.map((item, i) => (
    <ListItem key={i} bottomDivider>
    <Icon name={item.icon} />
    <ListItem.Content>
      <ListItem.Title>{item.title}</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
)))
const list = [
{
    title: 'ショップ名1',
    icon: 'set-meal'
},
{
    title: 'ショップ名2',
    icon: 'liquor'
  },
  {
      title: 'ショップ名3',
      icon: 'cake'
  },
  {
    title: 'ショップ名4',
    icon: 'bakery-dining'
  },
  {
    title: 'ショップ名5',
    icon: 'bakery-dining'
  },
  {
    title: 'ショップ名6',
    icon: 'bakery-dining'
  },
]
}