import React, { Component,useState,useRef, useEffect } from 'react';
import { Alert, Button, TouchableOpacity, View, StyleSheet, Text, Image, useWindowDimensions  } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';




import dummy from "../data/rec-data.json";
import styled from "styled-components";

const Question = styled.div;

const Result = styled.div;

const TemplateScreen = (props) =>  {
  const [quest, setquest] = useState([]);
  const [num, setNum] = useState(0);
  const [total, settotal] = useState([]);
  const [numtotal, setnumtotal] = useState([]);
  const [summary, setsummary] = useState([]);
  const [summary2, setsummary2] = useState([]);
  const [questnum, setquestnum] = useState([]);

  useEffect(() => {
    setquest(dummy.questions[num].Quest);
    setsummary(dummy.questions[num].result);
    setsummary2(dummy.questions[num].result2);
    setquestnum(dummy.questions[num].questNum);
  });

  const Add = () => {
    settotal(total.concat(summary));
    setnumtotal(numtotal.concat(questnum));
    setquest([]);
  };
  const Add2 = () => {
    settotal(total.concat(summary2));
    setnumtotal(numtotal.concat(questnum+4));
    setquest([]);
  };


  const { width } = useWindowDimensions();

  

  return (
    <View style={styles.container} >
      {
        num === 4 ? (
          <>
            <Text className="title" style={styles.result_title}> 당신의 취향을 반영한 템플릿은?</Text>
          </>
        ) : (
          <View style={styles.container}>
          <View style={styles.content}>
      <>
        <Text className="title" style={styles.title}>
          {' '}
          템플릿 추천 진단 질문
        </Text>
        <Text className="title" style={styles.quest_num}>
        {num+1} / 4</Text>
        
        <View style={styles.quest_box_main}>
          <View className="question-box" style={styles.quest_box}>
            <Text style={styles.quest_box_text}>{quest}</Text>
          </View>

        </View>

        {/* button */}
        <View style={styles.button_position}>
        
            <TouchableOpacity
              style={styles.button_style}
              type="button"
              onPress={() => {
                setNum(num + 1);
                Add();
              }}
            >
              <Text style={styles.question_button}>네</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button_style}
              type="button"
              onPress={() => {
                setNum(num + 1);
                Add2();
              }}
            >
              <Text style={styles.question_button}>아니요</Text>
            </TouchableOpacity>
          
            </View>
          </>
          
        </View>
        </View>
        )
      }

      {num === 4
          ? total.map((res, index) => {
              return (
                <>
                  <View key={index} className="result_value" style={styles.result_values}>
                    <Text key={index} style={styles.result_value}>{res}</Text>
                  </View>
                </>
              );
            })
      : null}



     

      {num === 4 ? 
          (String(numtotal)==="0,1,2,3") ?
            <>
              <View style={styles.template_main}>
                <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/K5FSYvn/2.png"}} style={styles.template}/>
              </View>
            </>
          : (String(numtotal)==="0,1,6,3") ?
            <>
              <View style={styles.template_main}>
                <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/p0CjKN3/10.png"}} style={styles.template} />
            </View>
            </>
          : (String(numtotal)==="0,5,2,3") ?
            <>
              <View style={styles.template_main}>
                <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/CbvYXCD/7.png"}} style={styles.template} />
            </View>
            </>
          : (String(numtotal)==="0,5,6,3") ?
          <>
            <View style={styles.template_main}>
              <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/vc65xRp/8.png"}} style={styles.template} />
            </View>
          </>
          : (String(numtotal)==="0,1,2,7") ?
          <>
            <View style={styles.template_main}>
              <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/vYqgYZL/14.png"}} style={styles.template} />
            </View>
          </>
          : (String(numtotal)==="0,1,6,7") ?
          <>
            <View style={styles.template_main}>
              <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/3R5jwQm/22.png"}} style={styles.template} />
            </View>
          </>
          : (String(numtotal)==="0,5,2,7") ?
          <>
            <View style={styles.template_main}>
              <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/Cw21XKY/18.png"}} style={styles.template} />
            </View>
          </>
          : (String(numtotal)==="0,5,6,7") ?
          <>
            <View style={styles.template_main}>
              <ImaAutoHeightImage width={width*0.7}ge source = {{uri: "https://i.ibb.co/pQ336Ng/19.png"}} style={styles.template} />
            </View>
          </>
          : (String(numtotal)==="4,1,2,3") ?
          <>
            <View style={styles.template_main}>
              <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/dJ33m04/2.png"}} style={styles.template} />
            </View>
          </>
          : (String(numtotal)==="4,1,6,3") ?
          <>
            <View style={styles.template_main}>
              <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/c2xjNnH/10.png"}}  style={styles.template} />
            </View>
          </>
          : (String(numtotal)==="4,5,2,3") ?
          <>
            <View style={styles.template_main}>
              <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/jfqJmXB/6.png"}}  style={styles.template}/>
            </View>
          </>
          : (String(numtotal)==="4,5,6,3") ?
          <>
            <View style={styles.template_main}>
              <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/Tq96bbK/7.png"}} style={styles.template} />
            </View>
          </>
          : (String(numtotal)==="4,1,2,7") ?
          <>
            <View style={styles.template_main}>
              <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/xJnyh3L/14.png"}} style={styles.template} />
            </View>
          </>
          : (String(numtotal)==="4,1,6,7") ?
          <>
            <View style={styles.template_main}>
              <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/7GWD93v/22.png"}} style={styles.template} />
            </View>
          </>
          : (String(numtotal)==="4,5,2,7") ?
          <>
            <View style={styles.template_main}>
              <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/SxvK4zV/18.png"}} style={styles.template} />
            </View>
          </>
          : (String(numtotal)==="4,5,6,7") ?
          <>
            <View style={styles.template_main}>
              <AutoHeightImage width={width*0.7} source = {{uri: "https://i.ibb.co/S6FYc2z/19.png"}} style={styles.template} />
            </View>
          </>
          : null

        : null}


      {num === 4 ?
          
          <>
          <View style={styles.template_button}>
            <TouchableOpacity
                style={styles.template_button_style}
                type="button"
                onPress={() => {
                  
                  props.navigation.push('Drawing', {
                  
                      
                      templateId: String(numtotal).replace(/,/g, "")
                    
                  });
                }
                
              }
            >
                <Text style={styles.text_button}>이 템플릿 사용하기</Text>
            </TouchableOpacity>

              <TouchableOpacity
                style={styles.template_button_style}
                type="button"
                onPress={() => {
                  props.navigation.navigate({routeName: 'Drawing'})
                  }
              }
              >
              <Text style={styles.text_button}>그냥 새 창 사용할래요</Text>
              </TouchableOpacity>
          </View>
            
          </>

      : null}

      
    </View>
  );
  
}
const styles = StyleSheet.create({
  container: {
    //flexDirection:'row',
    textAlign: 'center',
    flex: 1,
    //margin: 15,
    //marginTop: 80
    backgroundColor: '#c7d8f7'

  },
  content: {
    marginTop: 80
  },

  button_position: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  button_style: {
    borderRadius: 10,
    backgroundColor: "white",
    width: 300,
    height:100,
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20,
    padding: 20
  },

  title: {
    textAlign: 'center',
    fontSize: 50,
  },

  quest_num: {
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center'
  },

  text_button: {
    marginTop: 11,
    textAlign: 'center',
    fontSize: 25,
    padding: 20
  },

  question_button: {
    textAlign: 'center',
    fontSize: 40,
  },

  quest_box_text: {
    marginTop: 350,
    textAlign:'center',
    fontSize: 40
    
  },
  quest_box_main: {
    flexDirection:'row',
    justifyContent: 'center'
  },

  quest_box: {
    borderRadius: 20,
    marginTop: 30,
    width: 700,
    height: 800,
    backgroundColor: '#f2f7ff'
  },

  //result
  result_title: {
    textAlign: 'center',
    margin: 30,
    fontSize: 40,
  },
  template_main: {
    flexDirection:'row',
    justifyContent: 'center'
  },

  template: {
    // width: 300,
    // height: 400,
    resizeMode: 'contain',
    marginTop: 10
  },

  result_value: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 5,
    width: 300,
    height: 30,
    textAlign: 'center',
    borderRadius: 10
  },  

  result_values: {
    flexDirection:'row',
    justifyContent: 'center'
  },

  template_button: {
    flexDirection: 'row',
    justifyContent: "space-evenly"
  },

  template_button_style: {
    borderRadius: 10,
    backgroundColor: "white",
    width: 300,
    height: 100,
    marginTop: 20,
    
  },
});


// CopyScreen.navigationOptions = navData => {
//   return (
//     <Button type="button" title="템플릿 추천 결과 보러가기"
//                     onPress={() => {
//                       navData.navigation.navigate({routeName: 'Main'})
//                   }}    
//              />
//   )
// };



export default TemplateScreen;