import React from "react"
import {View, Text,Image,StyleSheet, TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons';


export default  function login({navigation}) {
    return (
    
      <View style={{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:'sans-serif',
        marginLeft:25,
        
            
    }}>
        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAva_nDsK7mJTEhykovT2J-WZJB7WnOsj6vbeXHsEAv34pFWa9Wp-tZDdoEJw6g6KAJg&usqp=CAU'}}       style={{marginLeft:45, marginTop:100,marginBottom:50,width: 200, height: 200,borderRadius:10,transform: [{rotate: '45deg'}]}} />
        <Text style={{marginLeft:20,paddingHorizontal:20,fontSize:30}}>Welcome to </Text><br></br>
        <Text style={{marginLeft:20,fontWeight: "bold",fontSize:30}} >Power Bike Shop</Text>

        
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate("Home")
        }}
        style={{
        backgroundColor: "#DDDD",
        padding: 10,
        paddingHorizontal:60,
        marginTop:20,
        borderRadius:10,
        flexDirection:"row",
        maxWidth:300
       
    }}
      >
       
     
    
       <Ionicons name="logo-google" size={25} color="rgb(256,100,10)"  /><Text style={{marginBottom:20,fontSize:20, flexDirection:"row"}}> Login with Gmail</Text>
        
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{
          navigation.navigate("cart")
        }}
        style={{
        backgroundColor: "black",
        padding: 10,
        paddingHorizontal:60,
        marginTop:20,
        borderRadius:10,
        flexDirection:"row",
        maxWidth:300
       
    }}
      >
       
     
    
       <Ionicons name="logo-apple" size={25} color="#ffff"  /><Text style={{marginBottom:20,fontSize:20, flexDirection:"row",color:"#ffff"}}> Login with Apple</Text>
        
        </TouchableOpacity>
        <Text style={{marginTop:10,fontWeight:500,color:"grey" ,marginLeft:60}}> Not a member? <Text style={{color:"orange",fontWeight:"bold"}}>Sign up</Text></Text>
    


        
      </View>

      
    );
  }
