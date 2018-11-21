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
import Loader from '../components/form/Loader';

// import Drawer from '../Drawer';
 
class Loginnew extends Component{
    constructor(props){
        super(props);
        this.state={
            // formValid:false,
            formValid:true,
            validEmail:false,
            // validEmail:true,
            emailAddress:'',
            validPassword:false,
            // validPassword:true,
        }
        this.handleCloseNotification=this.handleCloseNotification.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleNextButton=this.handleNextButton.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.toggleNextButtonState= this.toggleNextButtonState.bind(this);
    }

    handleNextButton(){
        // alert(this.state.emailAddress)
        // alert(this.validEmail);
        // alert('Next Putton Pressed')
        if(this.state.emailAddress === 'test@test.com' && this.state.validPassword){
            alert('Success');
            this.setState({ formValid: true });
        }else {
            this.setState({ formValid: false });
        }
    }

    handleCloseNotification(){
        // alert("Closing Notification")
        this.setState({ formValid : true})
    }

    handleEmailChange(email){
        // const emailCheckRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*) | (".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailCheckRegex=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        this.setState({ emailAddress:email});

        if(!this.state.validEmail){
            if(emailCheckRegex.test(email)){
                this.setState({ validEmail : true })
            }else{
                if(!emailCheckRegex.test(email)){
                    this.setState({ validEmail : false })
                }
            }
        }
    }

    handlePasswordChange(password){
        if(!this.state.validPassword){
            if(password.length > 4 ){
                //Password has to be at least 4 character long
                this.setState({ validPassword: true})
            }else if(password <= 4){
                this.setState({ validPassword: false});
            }
        }
    }

    toggleNextButtonState(){
        const { validEmail, validPassword }=this.state;
        if(validEmail && validPassword ){
            return false;
        }
        return true;
    }

     render(){
         const { formValid }=this.state;
         const showNotification=formValid? false:true;
         const background=formValid?colors.green01:colors.darkOrange;
         const notificationMarginTop= showNotification ? 10:0;

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
                            onChangeText={this.handleEmailChange}
                        />

                        <InputField 
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor='#ffffff'
                            textColor='#ffffff'
                            borderBottomColor="#ffffff"
                            inputType="password"
                            customStyle={{marginBottom:30}}
                            onChangeText={this.handlePasswordChange}

                        />

                    </ScrollView>
                </View>

                <View style={styles.nextButton}>
                    <NextArrorButton 
                        handleNextButton={this.handleNextButton}
                        disabled={this.toggleNextButtonState()}
                    />
                </View>

                {/* Button clickable interface */}
                <View style={[styles.notificationWrapper, {marginTop:notificationMarginTop}]}> 
                    <Notification 
                        showNotification={showNotification}
                        handleCloseNotification={this.handleCloseNotification}
                        type="Error"
                        firstLine="Those credentials don't look right"
                        secondLine="Please try again."
                    />
                </View>

                <Loader 
                    modalVisible={true}
                    animationType="fade"
                />
                    
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
    },
    notificationWrapper:{
        position:'absolute',
        bottom:0,
        // zIndex:9
        zIndex:999
    }
});