import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
 
class InputField  extends Component{

    constructor(props){
        super(props);
        this.state = {
            secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true,
        };
        this.toggleShowPassword=this.toggleShowPassword.bind(this);
    }

    toggleShowPassword(){
        this.setState({ secureInput: !this.state.secureInput});
        // alert(this.state.secureInput)
    }

     render(){
         const { labelText, labelTextSize, labelColor, textColor,borderBottomColor,inputType, customStyle, onChangeText }=this.props;
         const { secureInput }=this.state;
         const fontSize=labelTextSize || 14;
         const color=labelColor || '#ffffff';
         const inputColor=textColor || '#ffffff';
         const borderBottom=borderBottomColor || 'transparent';

         //let's change the keyboard if the input field is an email
         const keyboardType= inputType === 'email' ? 'email-address':'default';

        return(
            <View style={[customStyle, styles.wrapper]}> 
                <Text style={[{fontSize, color},styles.label]}>{labelText}</Text>

                {inputType === 'password' ?
                    <TouchableOpacity
                        style={styles.showButton}
                        onPress={this.toggleShowPassword}
                    >
                        <Text style={styles.showButtonText}>{secureInput ? 'Show': 'Hide'}</Text>
                    </TouchableOpacity>
                    :null
                }
                <TextInput 
                    // autoCorrect="false"
                    style={[{color: inputColor, borderBottomColor: borderBottom},styles.inputField]}
                    // secureTextEntry={inputType === 'password' ? true: false}
                    secureTextEntry={secureInput}
                    onChangeText={onChangeText}
                    keyboardType ={keyboardType}
                />
             </View>
         )
     }
}
 
export default InputField ;

InputField.propTypes={
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle:PropTypes.object,
    onChangeText:PropTypes.func,
}


const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
    },
    label:{
        fontWeight:'700',
        marginBottom:20,
    },
    inputField:{
        borderBottomWidth:1,
        paddingTop:5,
        paddingBottom:5
    },
    showButton:{
        position:'absolute',
        right:0
    },
    showButtonText:{
        color:'#ffffff',
        fontWeight:'700'
    }

});