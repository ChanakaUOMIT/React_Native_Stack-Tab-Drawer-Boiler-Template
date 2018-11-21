import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal
} from 'react-native';
 
class Loader  extends Component{
     render(){
    const { animationType, visible }=this.props;
        return(
            <Modal 
                animationType={animationType}
                transparent={true}
                visible={visible}
            >
                <Text>Hello</Text>
            </Modal>
         )
     }
}
 
export default Loader ;

Loader.propTypes ={
    animationType: PropTypes.string.isRequired,
    modalVisible: PropTypes.bool.isRequired,
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});