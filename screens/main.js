import React, { Component,useState,useRef } from 'react';
import { Alert, Button, View, StyleSheet } from 'react-native';
import { Draw, DrawRef } from "@benjeau/react-native-draw";
import { MobileModel, Image } from "react-native-pytorch-core";

// import Sketch from 'react-native-sketch';


const MainScreen = props =>  {


  const drawRef = useRef();
  // const drawRef = useRef<DrawRef>(null);

  // const removeLastPath = () {
  //   drawRef.current.?undo();
  // }

  // const clearDrawing = () {
  //   drawRef.current.?clear();
  // }

  // ... for more ref functions, look below

  return (
    <Draw
      ref={drawRef}
      height={1000}
      width={800}
      initialValues={{
        color: "#B644D0",
        thickness: 10,
        opacity: 0.5,
        paths: []
      }}
      brushPreview="stroke"
      autoDismissColorPicker="true"
      canvasStyle={{ elevation: 0, backgroundColor: "white" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
  },
});

export default MainScreen;