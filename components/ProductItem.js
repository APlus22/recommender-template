import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';//redux

import Colors from '../constants/colors'; //파일 안에 파일이 있어서 두번 나가야됨
import Card from './UI/Card';
import MainGrid from './Main/MainGrid';
import MainButton from './Main/MainButton';

const ProductItem = props => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21 ) {
        TouchableCmp = TouchableNativeFeedback;
    }

    const [seeContents, setSeeContents] = useState(false);
    const [seeSentence, setSeeSentence] = useState(false);

    // const getAvailableDiary = useSelector(state => state.감정.availableDiary);
    // let selectedDiary = getAvailableDiary.find(feel => feel.id === props.id);

    //0을 없애기 위해
    // const month = selectedDiary.time[5] === '0' ? selectedDiary.time[6] : selectedDiary.time.slice(5,7);
    // const day = selectedDiary.time[8] === '0' ? selectedDiary.time[9] : selectedDiary.time.slice(8,10);

    // const date = `${month}월 ${day}일`

    return (
        <Card style={{...styles.product, backgroundColor: props.color}}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onSelect}>

                    <View style={styles.container}>
                        <View>
                            {/* <Text style={styles.date}>{date}</Text> */}
                            <Text style={styles.title}>{props.feel}</Text>          
                        </View>
                        
                        <View style={styles.gridIcon}>
                            <MainGrid 
                                feel={props.feel} 
                                color={props.color}
                                onSelect={() => {
                                    
                                }}
                            />  
                        </View>
                    </View>

                    {/* <View style={styles.belowButton}>
                        <MainButton onPress={() => {
                            setSeeContents(!seeContents);
                        }}>
                            {"내용 보기"}
                        </MainButton>

                        <MainButton onPress={() => {
                            setSeeSentence(!seeSentence);
                        }}>
                            {"무드 한마디"}
                        </MainButton>
                    </View>

                    {seeContents ? (
                        <View>
                            <Text>내용</Text>
                            <Text style={styles.contents}>{props.feel}</Text> 
                        </View>
                    ) : <View/>}

                    {seeSentence? (
                        <View>
                            <Text>무드의 한마디</Text>
                            <Text style={styles.contents}>{props.feel}</Text> 
                        </View>
                    ) : <View/>} */}
                
                </TouchableCmp>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    product: {
        flex:1,
        margin: 10,
        //overflow: 'hidden' //이거 하면 그림자 없어짐
    },

    touchable: { //그림자를 안없어지게 하기 위해, 터치할때 영역만 선택하기 위해
        borderRadius: 10,
        overflow: 'hidden'
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 10
    },

    date: {
        fontFamily: 'open-sans-bold',
        fontSize: 40
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        marginVertical: 1,        
    },

    contents: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
        color: '#888'
    },

    gridIcon: {
        //flex: 1하면 꽉 채워서 맞추니까 width나 height로 값 주기
        width: '30%'
    },

    belowButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        //backgroundColor: 'yellow'
    }
});

export default ProductItem;