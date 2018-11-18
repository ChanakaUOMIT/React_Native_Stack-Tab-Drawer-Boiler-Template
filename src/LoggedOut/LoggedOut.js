import React, { Component } from 'react';
// import colors from '../styles/colors;'
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import RoundedButton from '../components/RoundedButton';
 
class LoggedOut  extends Component{
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
                    color="#008388"
                    backgroundColor="#fffffff"
                />
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
    }
})