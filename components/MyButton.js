import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';

import Colors from '../constants/colors';


//Button 태그 이용하지 않고 내가 만드는 버튼 (custom button)
const MyButton = props => {

    let ButtonComponent = TouchableOpacity;
    
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        //안드로이드의 경우에는 TouchableNativeFeedback으로 바꿈
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={{...styles.buttonContainer, ...props.style}}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={{...styles.button, ...{backgroundColor:props.backColor}}}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({ 
    buttonContainer: {
        borderRadius: 10,
        overflow: 'hidden' //안쓰는 테두리 숨겨주는거
    },

    button: {
        //backgroundColor: Colors.rose,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10 ,
    },

    buttonText: {
        //color: 'white',
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default MyButton;