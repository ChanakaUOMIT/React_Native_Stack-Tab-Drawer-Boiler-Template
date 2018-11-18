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
import InputField from '../components/form/InputField';
import NextArrorButton from '../components/button/NextArrorButton';

// import Drawer from '../Drawer';
 
class Loginnew extends Component{

    handleNextButton(){
        alert('Next Putton Pressed')
    }
     render(){
        return(
            <KeyboardAvoidingView 
                style={styles.wrapper}
                // behavior="padding"
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>
                            Log In                            
                        </Text>

                        <InputField 
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor='#ffffff'
                            textColor='#ffffff'
                            borderBottomColor="#ffffff"
                            inputType="email"
                            customStyle={{marginBottom:30}}
                        />

                        <InputField 
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor='#ffffff'
                            textColor='#ffffff'
                            borderBottomColor="#ffffff"
                            inputType="password"
                            customStyle={{marginBottom:30}}

                        />

                    </ScrollView>
                </View>

                <View style={styles.nextButton}>
                    <NextArrorButton 
                        handleNextButton={this.handleNextButton}
                    />
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
    },
    nextButton:{
        // position:'absolute',
        alignItems:'flex-end',
        right:20,
        bottom:10
    }
});