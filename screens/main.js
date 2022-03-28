import React, { Component,useState,useRef } from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Signature from "react-native-signature-canvas";



// import Sketch from 'react-native-sketch';

const MainScreen = (props) =>  {
  
  if(props.navigation.state.params != 'undefined' && props.navigation.state.params != null) {
    
    const [signature, setSign] = useState(null);
    const ref = useRef();

    
    const tempID = props.navigation.state.params.templateId;
    let example = "";

    if(tempID==="0123"){
      example = "https://i.ibb.co/K5FSYvn/2.png"
    } 
    else if (tempID==="0163"){
      example = "https://i.ibb.co/p0CjKN3/10.png"
    }
    else if (tempID==="0523"){
      example = "https://i.ibb.co/CbvYXCD/7.png"
    }
    else if (tempID==="0563"){
      example = "https://i.ibb.co/vc65xRp/8.png"
    }
    else if (tempID==="0127"){
      example = "https://i.ibb.co/vYqgYZL/14.png"
    }
    else if (tempID==="0167"){
      example = "https://i.ibb.co/3R5jwQm/22.png"
    }
    else if (tempID==="0527"){
      example = "https://i.ibb.co/Cw21XKY/18.png"
    }
    else if (tempID==="0567"){
      example = "https://i.ibb.co/pQ336Ng/19.png"
    }
    else if (tempID==="4123"){
      example = "https://i.ibb.co/dJ33m04/2.png"
    }
    else if (tempID==="4163"){
      example = "https://i.ibb.co/c2xjNnH/10.png"
    }
    else if (tempID==="4523"){
      example = "https://i.ibb.co/jfqJmXB/6.png"
    }
    else if (tempID==="4563"){
      example = "https://i.ibb.co/Tq96bbK/7.png"
    }
    else if (tempID==="4127"){
      example = "https://i.ibb.co/xJnyh3L/14.png"
    }
    else if (tempID==="4167"){
      example = "https://i.ibb.co/7GWD93v/22.png"
    }
    else if (tempID==="4527"){
      example = "https://i.ibb.co/SxvK4zV/18.png"
    }
    else if (tempID==="4567"){
      example = "https://i.ibb.co/S6FYc2z/19.png"
    }
    else {
      example = ""
    }

    

    const imgHeight = 1200;
    const imgWidth = 900;


    const handleOK = (signature) => {
      console.log(signature);
      setSign(signature);
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
      ref.current.changePenSize(1,10)	
      //ref.current.clearSignature();
    };
    const handlePenSizeMid = () => {
      ref.current.changePenSize(1,5)	
      //ref.current.clearSignature();
    };
    const handlePenSizeSm = () => {
      ref.current.changePenSize(1,3)	
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
      ref.current.changePenSize(20,40);	
    }
  
    const style = `
      .m-signature-pad{
        height: 400%;
        margin:0;
      }
      .m-signature-pad--footer {display: none; margin:0}
      `;

      return (
        <View style={{ flex: 1 }}>
          
          <Signature
            ref={ref}
            bgSrc={example}
            bgWidth={imgWidth}
            bgHeight={imgHeight}
            // style={{resizeMode: 'contain', height: 600, width:408}} 
            style={{resizeMode: 'contain'}} 
            onOK={handleOK}
            webStyle={style}

          />
          <View style={styles.paintController}>
            <Button title="Draw" onPress={handleDraw} style={{backgroundColor: "white"}}/>
            <Button title="Erase" onPress={handleErase} />
            <Button title="Undo" onPress={handleUndo} />
            <Button title="Redo" onPress={handleRedo} />
            <Button title="Clear" onPress={handleClear} />
            <Button title="Big" onPress={handlePenSizeBig} />
            <Button title="Middle" onPress={handlePenSizeMid} />
            <Button title="Small" onPress={handlePenSizeSm} />
            <Button title="Highlighter" onPress={handleHighlighter} />
          </View>
          <View style={styles.colorButton}>
            <TouchableOpacity style={{backgroundColor:"red", borderRadius:50, width: 100, height: 100}} onPress={handleColorRed}/>
            <TouchableOpacity style={{backgroundColor:"orange", borderRadius:50, width: 100, height: 100}} onPress={handleColorOrange}/>
            <TouchableOpacity style={{backgroundColor:"yellow", borderRadius:50, width: 100, height: 100}} onPress={handleColorYellow}/>
            <TouchableOpacity style={{backgroundColor:"green", borderRadius:50, width: 100, height: 100}} onPress={handleColorGreen}/>
            <TouchableOpacity style={{backgroundColor:"blue", borderRadius:50, width: 100, height: 100}} onPress={handleColorBlue}/>
            <TouchableOpacity style={{backgroundColor:"purple", borderRadius:50, width: 100, height: 100}} onPress={handleColorPurple}/>
          </View>
        </View>
      );

 }
else{
  const ref = useRef();
  const handleOK = (signature) => {
    console.log(signature);
    setSign(signature);
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
    ref.current.changePenSize(1,10)	
    //ref.current.clearSignature();
  };
  const handlePenSizeMid = () => {
    ref.current.changePenSize(1,5)	
    //ref.current.clearSignature();
  };
  const handlePenSizeSm = () => {
    ref.current.changePenSize(1,3)	
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

  const style = `
    .m-signature-pad{
      height: 400%;
      margin:0;
    }
    .m-signature-pad--footer {display: none; margin:0}
    `;

  return (
    <>
      
      <View style={{ flex: 1 }}>
          
          <Signature
            ref={ref}
            // style={{resizeMode: 'contain', height: 600, width:408}} 
            style={{resizeMode: 'contain'}} 
            onOK={handleOK}
            webStyle={style}

          />
          <View style={styles.paintController}>
            <Button title="Draw" onPress={handleDraw} style={{backgroundColor: "white"}}/>
            <Button title="Erase" onPress={handleErase} />
            <Button title="Undo" onPress={handleUndo} />
            <Button title="Redo" onPress={handleRedo} />
            <Button title="Clear" onPress={handleClear} />
            <Button title="Big" onPress={handlePenSizeBig} />
            <Button title="Middle" onPress={handlePenSizeMid} />
            <Button title="Small" onPress={handlePenSizeSm} />
          </View>
          <View style={styles.colorButton}>
            <TouchableOpacity style={{backgroundColor:"red", borderRadius:50, width: 100, height: 100}} onPress={handleColorRed}/>
            <TouchableOpacity style={{backgroundColor:"orange", borderRadius:50, width: 100, height: 100}} onPress={handleColorOrange}/>
            <TouchableOpacity style={{backgroundColor:"yellow", borderRadius:50, width: 100, height: 100}} onPress={handleColorYellow}/>
            <TouchableOpacity style={{backgroundColor:"green", borderRadius:50, width: 100, height: 100}} onPress={handleColorGreen}/>
            <TouchableOpacity style={{backgroundColor:"blue", borderRadius:50, width: 100, height: 100}} onPress={handleColorBlue}/>
            <TouchableOpacity style={{backgroundColor:"purple", borderRadius:50, width: 100, height: 100}} onPress={handleColorPurple}/>
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
    justifyContent:"space-around",
    marginTop: 35
  },
  paintController: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems:"flex-start", 
    justifyContent:"space-around",
  }
});

export default MainScreen;