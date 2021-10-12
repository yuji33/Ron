import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryList from './src/CategoryList';
import { Header } from 'react-native-elements';

export default function App() {
  return (
    <SafeAreaProvider>
      <Header
  　　　　leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
 　　　　 centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  　　　　rightComponent={{ icon: 'home', color: '#fff' }}
　　　　/>
       <NavigationContainer>
        <CategoryList/>
        {/* <View style={styles.container}> */}
         {/* <Text>プログラミング</Text> */}
         {/* <StatusBar style="auto" /> */}
        {/* </View> */}
       </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}