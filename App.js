import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { HomeScreen } from './components/HomeScreen'
import { ProfileScreen } from './components/ProfileScreen'

const StackApp = StackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen}
});

export default class App extends React.Component {
  render() {
    return (
      <StackApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
