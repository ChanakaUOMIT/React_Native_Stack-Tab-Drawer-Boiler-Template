import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

// import Drawer from '../Drawer';
 
class Loginnew extends Component{
     render(){
        return(
            <KeyboardAvoidingView style={styles.wrapper}>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>
                            Log In
                        </Text>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
         )
     }
}
 
export default Loginnew;


const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flex:1,
        backgroundColor:'#008388',

    },
    scrollViewWrapper:{
        marginTop:70,
        flex:1,
    },
    scrollView:{
        paddingLeft:30,
        paddingRight:30,
        paddingTop:20,
        flex:1
    },
    loginHeader:{
        fontSize:30,
        color:'#ffffff',
        fontWeight:'600',
        marginBottom:40,
    }
});