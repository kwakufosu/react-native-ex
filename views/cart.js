import React from "react"
import {View, Text,Image,StyleSheet, TouchableOpacity} from "react-native"
import { Ionicons,FontAwesome,AntDesign } from '@expo/vector-icons';


export  default function Home() {
    return (
    
     <View
     style={{
         backgroundColor: "white",
         flex:1,
         paddingTop:55,
         paddingHorizontal:20,
         fontFamily:'sans-serif',
        marginLeft:400,
        width:600,
        height:1000,
        
        marginTop:20
     }}
     >
         <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"left"}}>
         <Ionicons name="arrow-back-outline" size={20} color="black" style={{marginLeft:0}}></Ionicons>
         <Text style={{fontWeight:"bold",fontSize:20,paddingRight:250,marginTop:-15}}>Cart List <br></br> <Text style={{fontWeight:"bold", fontSize:15, color:"grey"}}>(3 items)</Text></Text>
           
           
         </View>

         
        
      <View style={{flexDirection:"row",textAlign:"center",borderRadius:10,marginBottom:30,marginTop:20}}>
         <TouchableOpacity
        
        style={{
        backgroundColor: "#DDDD",
        borderRadius:10,
        width:220,
        height:200,
        flexDirection:"row"
        
       
    }}
      >
        <Image source={{uri: 'https://images.pexels.com/photos/2798288/pexels-photo-2798288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}   
               style={{ width:'100%', height:'100%',borderRadius:10,}}  />
                 
        <View style={{justifyContent:"space-evenly",}} >

        <Text style={{color:"black",fontWeight:"bold",fontSize:20,textAlign:"left",paddingLeft:20,paddingBottom:60}}>Pinarello Bike </Text>
        <View>
        <Text style={{fontWeight:"bold",color:"grey",fontSize:15,marginBottom:60}}>Mountain Bike</Text>
        </View>
        <View>
        <Text style={{color:"orange",fontWeight:"bold",fontSize:20,paddingTop:-25}}>$ <Text style={{fontWeight:"bold",color:"black",fontSize:20}}>1,700.00</Text></Text>
        
        </View>

        <View>
          <TouchableOpacity
           style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:30,
            height:30,
            backgroundColor:'#fff',
            borderRadius:50,
            position:"absolute",
            top:-210,
            right:-190
          }}
          
          >
          <Ionicons name="trash-outline" size={20} color="orange" style={{  borderRadius:20 }}></Ionicons>
          </TouchableOpacity>
        
        </View>

        <View style={{flexDirection:"row"}}>
          
          
          
          <Ionicons name="remove-circle" size={30}  style={{  borderRadius:20,position:"absolute",top:-30,right:-90}}></Ionicons>
          <Text style={{  position:"absolute",top:-30,right:-140, fontSize:20,fontWeight:"bold"}}>1</Text>
          <Ionicons name="add-circle-sharp" size={30} color="orange" style={{  borderRadius:20,position:"absolute",top:-30,right:-200}}></Ionicons>
         
        
        </View>
        </View>
        
        
        
        </TouchableOpacity>
       
       
         </View>

         <View style={{flexDirection:"row",textAlign:"center",borderRadius:10,marginBottom:30,marginTop:20}}>
         <TouchableOpacity
        
        style={{
        backgroundColor: "#DDDD",
        borderRadius:10,
        width:220,
        height:200,
        flexDirection:"row"
        
       
    }}
      >
        <Image source={{uri: 'https://images.pexels.com/photos/2611675/pexels-photo-2611675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}   
               style={{ width:'100%', height:'100%',borderRadius:10,}}  />
                 
        <View style={{justifyContent:"space-evenly",}} >

        <Text style={{color:"black",fontWeight:"bold",fontSize:20,textAlign:"left",paddingLeft:20,paddingBottom:60}}>Brompton Bike </Text>
        <View>
        <Text style={{fontWeight:"bold",color:"grey",fontSize:15,marginBottom:60,paddingRight:50}}>Road Bike</Text>
        </View>
        <View>
        <Text style={{color:"orange",fontWeight:"bold",fontSize:20,paddingTop:-25,paddingRight:35}}>$ <Text style={{fontWeight:"bold",color:"black",fontSize:20}}>1,700.00</Text></Text>
        
        </View>

        <View>
          <TouchableOpacity
           style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:30,
            height:30,
            backgroundColor:'#fff',
            borderRadius:50,
            position:"absolute",
            top:-210,
            right:-190
          }}
          
          >
          <Ionicons name="trash-outline" size={20} color="orange" style={{  borderRadius:20 }}></Ionicons>
          </TouchableOpacity>
        
        </View>

        <View style={{flexDirection:"row"}}>
          
          
          
          <Ionicons name="remove-circle" size={30}  style={{  borderRadius:20,position:"absolute",top:-30,right:-90}}></Ionicons>
          <Text style={{  position:"absolute",top:-30,right:-140, fontSize:20,fontWeight:"bold"}}>1</Text>
          <Ionicons name="add-circle-sharp" size={30} color="orange" style={{  borderRadius:20,position:"absolute",top:-30,right:-190}}></Ionicons>
         
        
        </View>
        </View>
        
        
        
        </TouchableOpacity>
       
       
         </View>
        <View style={{flexDirection:"row",textAlign:"center",borderRadius:10,marginBottom:30,marginTop:20}}>
         <TouchableOpacity
        
        style={{
        backgroundColor: "#DDDD",
        borderRadius:10,
        width:220,
        height:200,
        flexDirection:"row"
        
       
    }}
      >
        <Image source={{uri:'https://images.pexels.com/photos/3068658/pexels-photo-3068658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}   
               style={{ width:'100%', height:'100%',borderRadius:10,}}  />
                 
        <View style={{justifyContent:"space-evenly",}} >

        <Text style={{color:"black",fontWeight:"bold",fontSize:20,textAlign:"left",paddingLeft:20,paddingBottom:60}}>Pinarello Bike </Text>
        <View>
        <Text style={{fontWeight:"bold",color:"grey",fontSize:15,marginBottom:60,paddingRight:35}}>Urban Bike</Text>
        </View>
        <View>
        <Text style={{color:"orange",fontWeight:"bold",fontSize:20,paddingTop:-25,paddingRight:20}}>$ <Text style={{fontWeight:"bold",color:"black",fontSize:20}}>1,200.00</Text></Text>
        
        </View>

        <View>
          <TouchableOpacity
           style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:30,
            height:30,
            backgroundColor:'#fff',
            borderRadius:50,
            position:"absolute",
            top:-210,
            right:-190
          }}
          
          >
          <Ionicons name="trash-outline" size={20} color="orange" style={{  borderRadius:20 }}></Ionicons>
          </TouchableOpacity>
        
        </View>

        <View style={{flexDirection:"row"}}>
          
          
          
          <Ionicons name="remove-circle" size={30}  style={{  borderRadius:20,position:"absolute",top:-30,right:-100}}></Ionicons>
          <Text style={{  position:"absolute",top:-30,right:-140, fontSize:20,fontWeight:"bold"}}>1</Text>
          <Ionicons name="add-circle-sharp" size={30} color="orange" style={{  borderRadius:20,position:"absolute",top:-30,right:-200}}></Ionicons>
         
        
        </View>
        </View>
        
        
        
        </TouchableOpacity>
        </View>
        
         
         
      <View>
        <TouchableOpacity
        style={{
          backgroundColor: "grey",
         paddingTop:0,
        paddingHorizontal:20,
        fontFamily:'sans-serif',
         width:600,
        borderRadius:20,
        backgroundColor:"#d0d3d4"
       
       }}
        >
          <View style={{flexDirection:"row",marginTop:10}}>
            <View>
              <Text style={{color:"grey",fontWeight:"bold"}}>Subtotal</Text>
            </View>
            <View>
            <Text style={{color:"#f5b041",paddingLeft:400}}>$</Text>
            </View>
            <View>
            <Text style={{color:" #d0d3d4 ",paddingLeft:5,fontWeight:"bold"}}>3,400.00</Text>
            </View>
          </View>

          <View style={{flexDirection:"row",marginTop:10,}}>
            <View>
              <Text style={{color:"grey",fontWeight:"bold"}}>Shipping fee</Text>
            </View>
            <View>
            <Text style={{color:"#f5b041",paddingLeft:374}}>$</Text>
            </View>
            <View>
            <Text style={{color:" #d0d3d4 ",paddingLeft:15,fontWeight:"bold"}}>100.00</Text>
            
            </View>
            
          </View>
          <Text>---------------------------------------------------------------------------------------------</Text>
          <View style={{flexDirection:"row",marginTop:10}}>
              <View><Text style={{fontWeight:"bold"}}>Total</Text></View>
              <View>
              <Text style={{color:"#f5b041",paddingLeft:424}}>$</Text>
              </View>
              <View>
              <Text style={{color:"black",paddingLeft:8, fontWeight:"bold"}}>3,500.00</Text> 
              </View>
              
                         
          </View>
        </TouchableOpacity>
      </View>
        
      <TouchableOpacity
        
        style={{
        
        padding: 10,
        paddingHorizontal:60,
        marginTop:20,
        marginLeft:50,
        borderRadius:10,
        flexDirection:"row",
        Width:600,
        backgroundColor:"#f5b041",
        justifyContent:"center"
       
    }}
      >
       
     
    
       <Text>Proceed to checkout</Text>
        
        </TouchableOpacity>

       

         <View style={{justifyContent:"center",alignItems:"center", marginTop:100,position:"relative" }} >
         <Ionicons name="mic-circle-sharp" size={40} color="black" style={{margin:0,position: 'absolute',top:-35,borderRadius:20,shadowColor:"#DDDD",shadowOffset:{width:0,height:2},shadowRadius:3}} ></Ionicons>
         </View >

         
        
        
         
         <View style={{flexDirection:"row",marginTop:3}}>
           
           <TouchableOpacity

        
        style={{
        backgroundColor: "#FFFF",
        marginTop:0,
        borderBottomLeftRadius:5,
        opacity:0.8,
        width:530,
        height:35
        
      }}
        
          
   
     >
        <Ionicons name="home" size={20} color="orange" style={{marginLeft:40,marginTop:8}}></Ionicons>
       
       </TouchableOpacity>

       <TouchableOpacity
        
        style={{
        backgroundColor: "#FFFF",
        marginTop:0,
        borderBottomRightRadius:5,
        opacity:0.8,
      }}
        
          
   
     >
         <FontAwesome name="shopping-bag" size={20} color="orange" style={{marginRight:40,marginTop:8}} ></FontAwesome>
       
       </TouchableOpacity>
         </View>
      
         
        
        
              
     </View>      
    );
  }