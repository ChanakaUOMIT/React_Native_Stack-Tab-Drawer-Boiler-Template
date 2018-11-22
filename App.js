import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './src/Login/Login';
import Drawer from './src/Drawer';
import LoggedOut from './src/LoggedOut/LoggedOut';
import Loginnew from './src/Login/Loginnew';
import ForgotPassword from './src/ForgotPassword/ForgotPassword';


export default class App extends Component {

  render() {
    return (
      // <AppStackNavigator />

      <Provider store={store}>
        <AppStackNavigator />
      </Provider>

    // <Text>RN ghg</Text>
    // <Login />
    );
  }
}

const AppStackNavigator =  createStackNavigator({
  Login:{
      screen: Loginnew
  },

  ForgotPassword:{
    screen: ForgotPassword
  }

  // Drawer:{
  //     screen: Drawer
  // },
  // LoggedOut:{
  //   screen: LoggedOut
  // }
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
