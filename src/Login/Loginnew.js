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
import Notification from '../components/notification/Notification';
import colors from '../styles/colors';

// import Drawer from '../Drawer';
 
class Loginnew extends Component{
    constructor(props){
        super(props);
        this.state={
            // formValid:false,
            formValid:true,

        }
        this.handleCloseNotification=this.handleCloseNotification.bind(this)
    }

    handleNextButton(){
        alert('Next Putton Pressed')
    }

    handleCloseNotification(){
        // alert("Closing Notification")
        this.setState({ formValid : true})
    }
     render(){
         const { formValid }=this.state;
         const showNotification=formValid? false:true;
         const background=formValid?colors.green01:colors.darkOrange;
        return(
            <KeyboardAvoidingView 
                style={[{backgroundColor:background} ,styles.wrapper]}
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

                <View style={showNotification ? {marginTop:10}: {}}>
                    <Notification 
                        showNotification={showNotification}
                        handleCloseNotification={this.handleCloseNotification}
                        type="Error"
                        firstLine="Those credentials don't look right"
                        secondLine="Please try again."
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
        // backgroundColor:'#008388',

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