import React, {useState,useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Draw, DrawRef } from "@benjeau/react-native-draw";

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'; 

import Navigation from './navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const fetchFonts = () => {
  return Font.loadAsync({ //폰트 로드
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  }); 
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  if (!fontLoaded) { //이게 다 실행이 되어야 메인 화면이 나옴. 폰트를 로딩하는거
    return ( 
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setfontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }; 

  return (
      <>
        <Navigation /> 
      </>
  );

  // return (
  //   <Draw
  //     ref={drawRef}
  //     height={400}
  //     width={300}
  //     initialValues={{
  //       color: "#B644D0",
  //       thickness: 10,
  //       opacity: 0.5,
  //       paths: []
  //     }}
  //     brushPreview="none"
  //     canvasStyle={{ elevation: 0, backgroundColor: "red" }}
  //   />
  // )

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
