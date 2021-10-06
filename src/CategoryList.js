import { ListItem, Icon } from 'react-native-elements'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CategoryList () {
return (
    <View>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</View>
);
}

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