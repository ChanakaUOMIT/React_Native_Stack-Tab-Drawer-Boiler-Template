import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Drawer from '../Drawer';
 
class Login extends Component{
    constructor(props){
        super(props);
    } 

    static navigationOptions={
        header:null
    }
     render(){
        return(
            <View style={styles.container}> 
                <Text> Login Screen ...? </Text>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Drawer')}>
                    <Text>Login</Text>
                </TouchableOpacity>
             </View>
         )
     }
}
 
export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});