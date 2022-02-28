import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import goal from '../assets/goal.png'
import * as Linking from 'expo-linking';
import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';


const link = () => {
        Linking.openURL("https://blog.naver.com/footprint25")
    }

export default function AboutPage({navigation,route}) {
    useEffect(()=>{
            navigation.setOptions({
                title:"소개 페이지",
                headerStyle: {
                    backgroundColor: '#1F266A',
                    shadowColor: "#1F266A",
                },
                headerTintColor: "#fff",
            })
        },[])

    console.disableYellowBox = true;
  return (
      <View style={styles.container}>
          <StatusBar style="light" />
        <Text style={styles.title}>스파르타 앱개발반 owl, Suri의 첫번째 앱 입니다!</Text>
        <View style={styles.middleContainer}>
            <Image style={styles.goal} source={goal} resizeMode={"cover"} />
            <Text style={styles.middleContents}>늦은 시작이지만, 개발자가 되기 위해 오늘도 한걸음   나아가고 있습니다.</Text>
            <Text style={styles.middleDesc}>그냥 늦은 게 더 늦은 것보다는 조금 빠르니까요 :D</Text>
            <TouchableOpacity style={styles.instaGram}><Text style={styles.instaText} onPress={()=>link()}>Suri의 블로그</Text></TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1F266A"        
    },

    title : {
        width:280,
        height:75,
        marginTop:60,
        fontSize:25,
        fontWeight:"700",
        alignSelf:"center",
        color:"#fff",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
            },
    middleContainer:{
        width : 280,
        height:500,
        borderRadius:20,
        backgroundColor:"#fff",
        alignSelf:"center",
        marginTop:10
    },
    goal:{
        marginTop:30,
        width:200,
        height:200,
        alignSelf:"center"
    },
    middleContents:{
        fontSize:17,
        fontWeight:"700",
        paddingLeft:40,
        paddingRight:40,
        textAlign:"center"
    },
    middleDesc:{
        fontSize:14,
        fontWeight:"400",
        paddingLeft:40,
        paddingRight:40,
        textAlign:"center",
        marginTop:20
    },
    instaGram:{
        marginTop:40,
        width:180,
        height:50,
        backgroundColor:"#F3B13E",
        borderRadius:8,
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },
    instaText:{
        color:"#fff",
        fontSize:14,
        fontWeight:"700"
    }
})