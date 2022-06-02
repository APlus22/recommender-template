import React, { Component, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Signature from "react-native-signature-canvas";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = (props) => {

  if (props.navigation.state.params != 'undefined' && props.navigation.state.params != null) {

    const [signature, setSign] = useState(null);
    const ref = useRef();


    const tempID = props.navigation.state.params.templateId;
    let example = "";

    if (tempID === "0123") {
      example = "https://i.ibb.co/K5FSYvn/2.png"
    }
    else if (tempID === "0163") {
      example = "https://i.ibb.co/p0CjKN3/10.png"
    }
    else if (tempID === "0523") {
      example = "https://i.ibb.co/CbvYXCD/7.png"
    }
    else if (tempID === "0563") {
      example = "https://i.ibb.co/vc65xRp/8.png"
    }
    else if (tempID === "0127") {
      example = "https://i.ibb.co/vYqgYZL/14.png"
    }
    else if (tempID === "0167") {
      example = "https://i.ibb.co/3R5jwQm/22.png"
    }
    else if (tempID === "0527") {
      example = "https://i.ibb.co/Cw21XKY/18.png"
    }
    else if (tempID === "0567") {
      example = "https://i.ibb.co/pQ336Ng/19.png"
    }
    else if (tempID === "4123") {
      example = "https://i.ibb.co/dJ33m04/2.png"
    }
    else if (tempID === "4163") {
      example = "https://i.ibb.co/c2xjNnH/10.png"
    }
    else if (tempID === "4523") {
      example = "https://i.ibb.co/jfqJmXB/6.png"
    }
    else if (tempID === "4563") {
      example = "https://i.ibb.co/Tq96bbK/7.png"
    }
    else if (tempID === "4127") {
      example = "https://i.ibb.co/xJnyh3L/14.png"
    }
    else if (tempID === "4167") {
      example = "https://i.ibb.co/7GWD93v/22.png"
    }
    else if (tempID === "4527") {
      example = "https://i.ibb.co/SxvK4zV/18.png"
    }
    else if (tempID === "4567") {
      example = "https://i.ibb.co/S6FYc2z/19.png"
    }
    else {
      example = ""
    }



    const imgHeight = 1200;
    const imgWidth = 900;

    //개발 대안 조건
    // 1. 템플릿 추천용 캔버스가 아닌 일반 캔버스에서 사용할 것 
    // 2. 인공지능으로 돌리는 버튼 클릭 시 텍스트화 후 캔버스 없는 페이지로 이동
    // 3. 그 페이지에 텍스트화 된 거 붙이기 

    const handleOK = async (signature) => {
      // console.log(signature);
      // setSign(signature);
      // const base64Code = signature.split("data:image/png;base64,")[1];
      // const filename = FileSystem.documentDirectory + "some_unique_file_name.png";
      // console.log("테스트 : ", FileSystem);
      // await FileSystem.writeAsStringAsync(filename, base64Code, {
      //   encoding: FileSystem.EncodingType.Base64,
      // });

      AsyncStorage.setItem('test_id', signature, () => { //test_id변수로 signature (base64) 저장
        console.log('이미지 id저장')
      });

      AsyncStorage.getItem('test_id', (err, result) => { //test_id에 담긴 아이디 불러오기
        console.log(result); // result에 siganture 이미지 파일 담김 //불러온거 출력
      });

      //base64 파일 image로 불러오는 방법
      // <Image
      //     download
      //     source={{
      //       uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
      //     }}
      //   />
    };

    const handleEmpty = () => {
      console.log("Empty");
    };

    const handleDraw = () => {
      ref.current.draw();
    }

    const handleErase = () => {
      ref.current.erase();
    }

    const handleUndo = () => {
      ref.current.undo();
    }

    const handleRedo = () => {
      ref.current.redo();
    }

    const handleClear = () => {
      ref.current.clearSignature();
    };
    const handlePenSizeBig = () => {
      ref.current.changePenSize(10, 10)
      //ref.current.clearSignature();
    };
    const handlePenSizeMid = () => {
      ref.current.changePenSize(5, 5)
      //ref.current.clearSignature();
    };
    const handlePenSizeSm = () => {
      ref.current.changePenSize(3, 3)
      //ref.current.clearSignature();
    };
    const handleColorRed = () => {
      ref.current.changePenColor("red");
    }
    const handleColorYellow = () => {
      ref.current.changePenColor("yellow");
    }
    const handleColorOrange = () => {
      ref.current.changePenColor("orange");
    }
    const handleColorGreen = () => {
      ref.current.changePenColor("green");
    }
    const handleColorBlue = () => {
      ref.current.changePenColor("blue");
    }
    const handleColorPurple = () => {
      ref.current.changePenColor("purple");
    }
    const handleHighlighter = () => {
      ref.current.changePenColor("rgba(255,212,0,0.1)")
      ref.current.changePenSize(20, 40);
    }
    /*테스트*/
    const handleConfirm = () => {
      console.log("end");
      const canvas2 = ref.current.readSignature();
      handleOK(canvas2);
    };

    const style = `
      .m-signature-pad{
        height: 380%;
        margin:0;
      }
      
      `;
    //height: 400%;
    // .m-signature-pad--footer {display: none; margin:0}

    return (
      <View style={{ flex: 1 }}>
        <Image
          download
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
        <Signature
          ref={ref}
          bgSrc={example}
          bgWidth={imgWidth}
          bgHeight={imgHeight}
          // style={{resizeMode: 'contain', height: 600, width:408}} 
          style={{ resizeMode: 'contain' }}
          onOK={handleOK}

          confirmText="Save"
          webStyle={style}

        />
        <View style={styles.paintController}>
          <Button title="Draw" onPress={handleDraw} style={{ backgroundColor: "white" }} />
          <Button title="Erase" onPress={handleErase} />
          <Button title="Undo" onPress={handleUndo} />
          <Button title="Redo" onPress={handleRedo} />
          <Button title="Confirm" onPress={handleConfirm} />
          <Button title="Big" onPress={handlePenSizeBig} />
          <Button title="Middle" onPress={handlePenSizeMid} />
          <Button title="Small" onPress={handlePenSizeSm} />
          <Button title="Highlighter" onPress={handleHighlighter} />
        </View>
        <View style={styles.colorButton}>
          <TouchableOpacity style={{ backgroundColor: "red", borderRadius: 50, width: 100, height: 100 }} onPress={handleColorRed} />
          <TouchableOpacity style={{ backgroundColor: "orange", borderRadius: 50, width: 100, height: 100 }} onPress={handleColorOrange} />
          <TouchableOpacity style={{ backgroundColor: "yellow", borderRadius: 50, width: 100, height: 100 }} onPress={handleColorYellow} />
          <TouchableOpacity style={{ backgroundColor: "green", borderRadius: 50, width: 100, height: 100 }} onPress={handleColorGreen} />
          <TouchableOpacity style={{ backgroundColor: "blue", borderRadius: 50, width: 100, height: 100 }} onPress={handleColorBlue} />
          <TouchableOpacity style={{ backgroundColor: "purple", borderRadius: 50, width: 100, height: 100 }} onPress={handleColorPurple} />

        </View>
      </View>
    );

  }
  else {
    const ref = useRef();

    const handleOK = async (signature) => {
      // console.log(signature);
      // const base64Code = signature.split("data:image/png;base64,")[1];
      // const filename = FileSystem.documentDirectory + "some_unique_file_name.png";
      // await FileSystem.writeAsStringAsync(filename, base64Code, {
      //   encoding: FileSystem.EncodingType.Base64,
      // });

      // const mediaResult = await MediaLibrary.saveToLibraryAsync(filename);

      AsyncStorage.setItem('test_id', signature, () => { //test_id변수로 signature (base64) 저장
        console.log('이미지 id저장')
      });

      AsyncStorage.getItem('test', (err, result) => { //test_id에 담긴 아이디 불러오기
        console.log(result); // result에 담김 //불러온거 출력
      });

    };

    const handleEmpty = () => {
      console.log("Empty");
    };

    const handleDraw = () => {
      ref.current.draw();
    }

    const handleErase = () => {
      ref.current.erase();
    }

    const handleUndo = () => {
      ref.current.undo();
    }
    const handleRedo = () => {
      ref.current.redo();
    }
    const handleClear = () => {
      ref.current.clearSignature();
    };
    const handlePenSizeBig = () => {
      ref.current.changePenSize(10, 10)
      //ref.current.clearSignature();
    };
    const handlePenSizeMid = () => {
      ref.current.changePenSize(5, 5)
      //ref.current.clearSignature();
    };
    const handlePenSizeSm = () => {
      ref.current.changePenSize(3, 3)
      //ref.current.clearSignature();
    };
    const handleColorRed = () => {
      ref.current.changePenColor("red");
    }
    const handleColorYellow = () => {
      ref.current.changePenColor("yellow");
    }
    const handleColorOrange = () => {
      ref.current.changePenColor("orange");
    }
    const handleColorGreen = () => {
      ref.current.changePenColor("green");
    }
    const handleColorBlue = () => {
      ref.current.changePenColor("blue");
    }
    const handleColorPurple = () => {
      //ref.current.backgroundColor = 'rgba(255,0,0,0.3)';
      ref.current.changePenColor("purple");
      console.log(ref.current.changePenColor)
    }
    const handleHighlighter = () => {
      ref.current.changePenColor("rgba(255,212,0,0.1)")
      ref.current.changePenSize(20, 40);
    }

    /*테스트*/
    const handleConfirm = () => {
      console.log("end");
      const canvas2 = ref.current.readSignature();
      handleOK(canvas2);
    };

    const style = `
    .m-signature-pad{
      height: 380%;
      margin:0;
    }
    `;

    return (
      <>

        <View style={{ flex: 1 }}>

          <Signature
            ref={ref}
            // style={{resizeMode: 'contain', height: 600, width:408}} 
            style={{ resizeMode: 'contain' }}
            onOK={handleOK}
            webStyle={style}
            confirmText="Save"

          />
          <View style={styles.paintController}>
            <Button title="Draw" onPress={handleDraw} style={{ backgroundColor: "white" }} />
            <Button title="Erase" onPress={handleErase} />
            <Button title="Undo" onPress={handleUndo} />
            <Button title="Redo" onPress={handleRedo} />
            <Button title="Confirm" onPress={handleConfirm} />
            <Button title="Big" onPress={handlePenSizeBig} />
            <Button title="Middle" onPress={handlePenSizeMid} />
            <Button title="Small" onPress={handlePenSizeSm} />
            <Button title="Highlighter" onPress={handleHighlighter} />
          </View>
          <View style={styles.colorButton}>
            <TouchableOpacity style={{ backgroundColor: "red", borderRadius: 50, width: 100, height: 100 }} onPress={handleColorRed} />
            <TouchableOpacity style={{ backgroundColor: "orange", borderRadius: 50, width: 100, height: 100 }} onPress={handleColorOrange} />
            <TouchableOpacity style={{ backgroundColor: "yellow", borderRadius: 50, width: 100, height: 100 }} onPress={handleColorYellow} />
            <TouchableOpacity style={{ backgroundColor: "green", borderRadius: 50, width: 100, height: 100 }} onPress={handleColorGreen} />
            <TouchableOpacity style={{ backgroundColor: "blue", borderRadius: 50, width: 100, height: 100 }} onPress={handleColorBlue} />
            <TouchableOpacity style={{ backgroundColor: "purple", borderRadius: 50, width: 100, height: 100 }} onPress={handleColorPurple} />
          </View>
        </View>


      </>

    );
  }



}

const styles = StyleSheet.create({
  preview: {
    width: 335,
    height: 114,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10,
  },
  colorButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-around",
    marginTop: 35
  },
  paintController: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "flex-start",
    justifyContent: "space-around",
  }
});

export default MainScreen;