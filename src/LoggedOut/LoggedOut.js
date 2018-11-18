import React, { Component } from 'react';
// import colors from '../styles/colors;'
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image
} from 'react-native';
import RoundedButton from '../components/button/RoundedButton';
import Icon from 'react-native-vector-icons/FontAwesome';
 
class LoggedOut  extends Component{

    onFacebookPress(){
        alert('Facebook button Press')
    }

    onCreateAccountPress(){
        alert('Create Account Press')
    }

    onMoreOptionsPress(){
        alert('More Options Press')
    }

     render(){
        return(
            <View style={styles.wrapper} > 
            <View style={styles.logoContainer}>
                <Image
                    source={require('../Images/logo1.png')}
                    style={styles.logo}
                />
                <Text style={styles.welcomeText}>
                    Welcome to AladinLabs
                </Text>
                <RoundedButton 
                    label="Continuos with Facebook"
                    textColor="#008388"
                    background="#ffffff"
                    icon={<Icon name="facebook" size={20}  style={styles.facebookButtonIcon}/>}
                    handleOnPress={this.onFacebookPress}
                />

                <RoundedButton 
                    label="Create an Acoount"
                    textColor="#ffffff"
                    // background="#ffffff"
                    // icon={<Icon name="facebook" size={20}  style={styles.facebookButtonIcon}/>}
                    handleOnPress={this.onCreateAccountPress}
                />

                <TouchableHighlight 
                    style={styles.moreOptionsButton}
                    onPress={this.onMoreOptionsPress}
                >
                    <Text style={styles.moreOptionsButtonText}>More options</Text>
                </TouchableHighlight>

                <View style={styles.termsAndCondition}>
                    <Text style={styles.termsText}>By tapping Continue, Create Account or More options, </Text>
                    <Text style={styles.termsText}> I  agreed to AladinLab's</Text>
                    
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}> Terms of Service</Text>
                    </TouchableHighlight>

                    <Text style={styles.termsText}> , </Text> 

                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Payments Terms of Service,</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Privacy Policy</Text>
                    </TouchableHighlight>

                      
                    <Text style={styles.termsText}> and </Text>   
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Nondiscrimination Policy.</Text>
                    </TouchableHighlight>

                </View>

            </View>
             </View>
         )
     }
}
 
export default LoggedOut ;

const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        display:'flex',
        backgroundColor:'#008388',
    },
    logoContainer:{
        flex:1,
        display:'flex',
        // alignItems: 'center',
        marginTop:50,
        padding:20
    },
    logo:{
        width:60,
        height:50,
        marginTop:30
    },
    welcomeText:{
        fontSize:30,
        color:'#ffffff',
        fontWeight:'300',
        marginBottom:40
    },
    facebookButtonIcon:{
        color:'#008388',
        position:'relative',
        left:20,
        zIndex: 8
    },
    moreOptionsButton:{
        marginTop:15
    },
    moreOptionsButtonText:{
        color:'#ffffff',
        fontSize:16,
    },
    termsAndCondition:{
        flexWrap:'wrap',
        alignItems:'flex-start',
        flexDirection:'row',
        marginTop:30
    },

    termsText:{
        color:'#ffffff',
        fontSize:13,
        fontWeight:'600'
    },
    linkButton:{
        borderBottomWidth:1,
        borderBottomColor:'#ffffff'
    }
})