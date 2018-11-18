import React, { Component } from 'react';
import propTypes from 'prop-types';
import {View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
 
class RoundedButton  extends Component{
     render(){
         const {label,color, backgroundColor}=this.props;
        return(
            <TouchableHighlight style={[{backgroundColor},styles.wrapper]}> 
                <Text 
                    style={[{color},styles.buttonText]}>
                        {label}
                </Text>
             </TouchableHighlight>
         )
     }
}
 
export default RoundedButton ;

RoundedButton.propTypes={
    label: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
    backgroundColor: propTypes.string.isRequired,


}

const styles = StyleSheet.create({
    wrapper: {
        display:'flex',
        padding:15,
        borderRadius:40,
        borderWidth:1,
        borderColor:'#ffffff'
    },

    buttonText:{
        fontSize:16,
        width: '100%',
        textAlign:'center'
    }
});