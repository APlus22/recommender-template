import React, { Component,useState,useRef } from 'react';
import { Alert, Button, View, StyleSheet, Text, FlatList } from 'react-native';
import { Draw, DrawRef } from "@benjeau/react-native-draw";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

// import Sketch from 'react-native-sketch';
import HeaderButton from '../components/HeaderButton';
import FeelingGridTile from '../components/FeelingGridTile';
import ProductItem from '../components/ProductItem';

import {FEELING} from '../data/dummy-data';
import AsyncStorage from '@react-native-async-storage/async-storage';


const FolderScreen = props =>  {

  const renderGridItem = (itemData) => {
    return (
        <FeelingGridTile 
            feel={itemData.item.feel} 
            color={itemData.item.color}
            onSelect={() => {
                //params가 데이터를 해당 스크린으로 전달하는거
                props.navigation.navigate({routeName: 'Create2', params: {
                    //CategoryTitle: itemData.item.title -> title만 전달할 경우
                    FeelId: itemData.item.id
                }});
            }}
        />
    )
  };

  const renderbookmark = (itemData) => {
    return (
        <ProductItem 
            //redux로 구현
            feel={itemData.item.feel} 
            color={itemData.item.color}
            id={itemData.item.id}
            // title={itemData.item.title}
            // contents={itemData.item.contents}  
            // time={itemData.item.time} 
            // sentence={itemData.item.sentence}
            onSelect={() => {
                props.navigation.navigate({routeName: 'Detail', params: {
                    DiaryId: itemData.item.id,
                    //feelId: itemData.item.DiaryFeelid //=== findId.id 이걸 줄 필요가 없을거 같노
                }});
            }}
        />
    )
  };

  const isEmpty = (value) => {
    if (value === '' || value === null || value === undefined || (value !== null && typeof value === 'object' && !Object.keys(value).length)) {
      return true;
    } else {
      return false;
    }
  };

  const [a,seta] = useState('')

  const save = (key) => {
    AsyncStorage.setItem(key,JSON.stringify({'user_id': 'hwije123', 'user_nickname':'HJ'}), () => {
      console.log('저장') //json형식을 stringify로 string화 해서 저장해줬다
    });
    AsyncStorage.getAllKeys((err, keys) => {
      console.log(keys)
    });
  };

  const get = (key) => {
    AsyncStorage.getItem(key, (err, result) => {
      const user = JSON.parse(result);             //string화 된 result를 parsing
      console.log('아이디는' + user.user_id);        // user에 담긴 id출력
      console.log('별명은: ' + user.user_nickname);  // user에 담긴 닉네임 출력
    });
  };

  const remove = (key) => {
    AsyncStorage.removeItem(key);
    AsyncStorage.getAllKeys((err, keys) => {
      console.log(keys)
    });
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.con_left}>
        <Text style={styles.text_title}>즐겨찾기</Text>
        <FlatList //itemData에는 reduxProducts.availableProducts이 들어가있음
                data={FEELING}
                keyExtractor={item => item.id}
                renderItem={renderbookmark}
          /> 
      </View>
      <View style={styles.con_right}>
        <FlatList 
                keyExtractor={(item, index) => item.id}
                data={FEELING} 
                renderItem={renderGridItem}
                numColumns={3} //열의 수
                
                // 여기는 헤더 표시하는거
                ListHeaderComponent={
                    <View>
                        <Text>hihi</Text>
                    </View>
                }
        />
        <Text style={styles.text_title}>{a}</Text>
        <Button title='save' onPress={save("test")}/>
        <Button title='get' onPress={get("test")}/>
        <Button title='remove' onPress={remove("test")}/>
      </View>
        
    </View>  

    
  );
}

FolderScreen.navigationOptions = navData => {
  return {
      headerTitle: 'Main',
      headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item 
                  title='Cart' 
                  iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                  onPress={() => {
                      navData.navigation.navigate({routeName: 'Main'})
                  }}    
              />
          </HeaderButtons>
      ),

      headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item 
                  title='Menu' 
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                      navData.navigation.toggleDrawer();
                  }}    
              />
          </HeaderButtons>
      )
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flex: 1,
    margin: 20,
  },

  text_title: {
    fontSize:25
  },  

  con_left: {
    flex: 0.3
  },

  con_right: {
    flex: 0.7
  } 


});

export default FolderScreen;