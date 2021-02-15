import React, { Component } from 'react';
import {Text, View, Pressable, StyleSheet, Alert} from 'react-native';

class CoinScreen extends Component{
    
    handlePress = () => {
        console.log('viendo los props ', this.props);
        if(false){
            this.props.navigation.navigate('CoinDetail');
        } else {
            Alert.alert('informacion incorrecta' );
        }
        
    }

    render(){
        return (
            <View style = {style.container}>
                <Text>Initial text 2</Text>
                <Pressable onPress={this.handlePress} style = {style.button}>
                    <Text>Press me</Text>
                </Pressable>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'red'
    },
    button: {
        color: 'cyan',
        alignItems: 'center',
        backgroundColor: 'yellow',
        padding: 10,
        margin: 8,
        borderRadius: 4 
    }
});
export default CoinScreen;