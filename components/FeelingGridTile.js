import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback, Touchable} from 'react-native';

const FeelingGridTile = props => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21 ) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>

                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.feel} numberOfLines={2}>{props.feel}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height:95,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 3
    },

    container: {
        flex: 1,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    feel: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center'
    }

});

export default FeelingGridTile;