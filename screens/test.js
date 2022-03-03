import React, { Component,useState,useRef, useEffect } from 'react';
import { Alert, Button, View, StyleSheet, Text } from 'react-native';
import { Draw, DrawRef } from "@benjeau/react-native-draw";
import { MobileModel, ImageUtil } from "react-native-pytorch-core";
import { Image } from 'react-native-pytorch-core';

// import Sketch from 'react-native-sketch';

import { spawn } from 'child_process';
import {PythonShell} from 'python-shell';

const TestScreen = props =>  {
  // const {PythonShell} = require('python-shell')
  // let pyshell = new PythonShell('kk.py');

  // PythonShell.run('kk.py', null, function (err, results) {
  //   // script finished
  // });
  
  // PythonShell.runString('x=1+1;print(x)', null, function (err) {
  //   if (err) throw err;
  //   console.log('finished');
  // });

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/helloworld/song/25', {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(data => {
      setData(data)
    })
  }, [])

  // 모델 불러오기
  // const model = require('sample_datamodel.pt');
  // const image = ImageUtil.from('https://pytorch.org/example.jpg');
  // const result = MobileModel.run(model, {
  //     image,
  // });

  //spawn 사용
  // const { spawn } = require('child_process').spawn; //성공 (package.json에 browser 추기)
  // const result = spawn('python', ['kk.py']); //여기서 오류. 해결해야됨. 뭐 좀 깔아봐 위에 처럼

  // result.stdout.on('data', function(data) { 
  //   console.log(data.toString()); 
  // }); 

  // result.stderr.on('data', function(data) { 
  //   console.log(data.toString()); 
  // });

  // python Shell 사용
  // const {PythonShell} = require('python-shell');
  // console.log("from js")

  // PythonShell.runString('x=1+1;print(x)', null, function (err) {
  //     if (err) throw err;
  //     console.log('finished');
  // });
  
  // PythonShell.run('kk.py', function (err) {
  // if (err) throw err;
  // console.log('finished');
  // });


  return (
    <View>
        <Text>testScreen</Text>
        <Text>{data}</Text>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
  },
});

export default TestScreen;