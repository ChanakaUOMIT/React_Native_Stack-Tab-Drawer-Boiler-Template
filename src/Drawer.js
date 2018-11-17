import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Settings from './Settings';  //Tab Nav
import Profile from './Profile'; //Stack Nav

export default class Drawer extends React.Component{
    render(){
        return(
            <AppDrawerNavigator />
        )
    }
}

const CustomDrawerComponent = (props)=>(
    <SafeAreaView>
        <View style={{height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
            <Image source={require('./Images/user.jpg')} style={{height:120, width:120, borderRadius:60}} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

// export default createDrawerNavigator({
const AppDrawerNavigator= createDrawerNavigator({
  Settings: {
    screen: Settings, 
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
    }
  },
},{
    contentComponent:CustomDrawerComponent
});  