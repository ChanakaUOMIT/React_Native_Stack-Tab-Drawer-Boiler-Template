import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
 
class NextArrorButton extends Component{
     render(){
         const { disabled }= this.props;
         const opasityStyle= disabled?{backgroundColor : 'rgba(255,255,255,0.2'}:{ backgroundColor: 'rgba(255,255,255,0.6)'};
        return(
            <TouchableHighlight
                style={[opasityStyle,styles.button]}
            >
                <Icon 
                    name="angle-right"
                    color='#008388'
                    size={32}
                    style={styles.icon}
                />
                {/* <Text>gfgf</Text> */}
            </TouchableHighlight>
         )
     }
}
 
export default NextArrorButton;


const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        width:60,
        height:60
    },
    icon:{
        marginRight:-2,
        marginTop:-2,
    }
});