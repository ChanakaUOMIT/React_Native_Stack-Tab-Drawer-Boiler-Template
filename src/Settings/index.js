import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MemoryScreen from './Memory';
import CPUScreen from './CPU';

const SettingsTabs = createMaterialTopTabNavigator({
// const SettingsTabs = createMaterialBottomTabNavigator({

    CPU: {
        screen: CPUScreen,
        navigationOptions: {
            title: "CPU",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="microchip"
                    size={17}
                    color={tintColor} /> 
            )
        }
    },
    Memory: {
        screen: MemoryScreen,
        navigationOptions: {
            tabBarLabel: "Memory",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="memory"
                    size={17}
                    color={tintColor} />
            )
        }
    }
},{
    initialRouteName:'CPU',
    tabBarPosition:'bottom',
    animationEnabled:true,
    swipeEnabled:true,
    tabBarOptions:{
        showIcon:true,
        style: {
            backgroundColor: 'red',
          },
    },
   
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });