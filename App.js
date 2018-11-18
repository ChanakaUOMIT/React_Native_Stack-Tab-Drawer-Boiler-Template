import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './src/Login/Login';
import Drawer from './src/Drawer';
import LoggedOut from './src/LoggedOut/LoggedOut';


export default class App extends Component {

  render() {
    return (
      <AppStackNavigator />
    // <Text>RN ghg</Text>
    // <Login />
    );
  }
}

const AppStackNavigator =  createStackNavigator({
  // Login:{
  //     screen: Login
  // },

  // Drawer:{
  //     screen: Drawer
  // },
  LoggedOut:{
    screen: LoggedOut
  }
},
navigationOptions={
    headerMode:"none"
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
