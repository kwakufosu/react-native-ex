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
        alignContent:'center',
        marginTop:20
     }}
     >
         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
         <Ionicons name="menu-outline" size={20} color="black"></Ionicons>
         <FontAwesome name="motorcycle" size={20} color="black"></FontAwesome>
         <View style={{flexDirection:"row"}}>
         <AntDesign name="search1" size={20} color="black"></AntDesign>
            <Ionicons name="notifications-outline" size={20} color="black"></Ionicons>
         </View>

         
           
         </View>
         <Text style={{marginTop:10, color:"grey"}}>The World's <Text style={{fontWeight:"bold", fontSize:20, color:"orange"}}>Best Bike</Text></Text>
         <Text style={{marginTop:10,fontWeight:"bold"}}>Categories</Text>

         <View style={{flexDirection:"row",textAlign:"center",borderRadius:10,marginBottom:30}}>
         <TouchableOpacity
        
        style={{
        backgroundColor: "#DDDD",
        padding: 10,
        paddingHorizontal:10,
        marginTop:20,
        borderRadius:10,
        width:60,
        
       
    }}
      >
        <Text style={{color:"orange"}}>All</Text>     
        </TouchableOpacity>
        <TouchableOpacity
        
        style={{
        backgroundColor: "#DDDD",
        padding: 10,
        paddingHorizontal:10,
        marginTop:20,
        borderRadius:10,
        width:100,
        
        marginLeft:60
    }}
      >
        <Text style={{color:"grey"}}>Roadbike</Text>     
        </TouchableOpacity>

        <TouchableOpacity
        
        style={{
        backgroundColor: "#DDDD",
        padding: 10,
        paddingHorizontal:10,
        marginTop:20,
        borderRadius:10,
        width:100,
        
        marginLeft:60
    }}
      >
        <Text style={{color:"grey"}}>Mountain</Text>     
        </TouchableOpacity>
        <TouchableOpacity
        
        style={{
        backgroundColor: "#DDDD",
        padding: 10,
        paddingHorizontal:10,
        marginTop:20,
        borderRadius:10,
        width:100,
        
        marginLeft:60
    }}
      >
        <Text style={{color:"grey"}}>Urban</Text>     
        </TouchableOpacity>
         </View>

         <View style={{flexDirection:"row",textAlign:"center",borderRadius:10,marginBottom:30}}>
         <TouchableOpacity
        
        style={{
        backgroundColor: "#DDDD",
        borderRadius:10,
        width:220,
        height:300
        
       
    }}
      >
        <Image source={{uri: 'https://images.pexels.com/photos/2798288/pexels-photo-2798288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}   
               style={{ width:'100%', height:'100%',borderRadius:10,}}  />
               <Ionicons name="heart-outline" size={20} color="orange" style={{ position: 'absolute', top: 10, right: 10 }}></Ionicons>  
        <Text style={{color:"grey"}}>Pinarello Bike</Text>
        <Text style={{color:"orange",fontWeight:"bold",fontSize:20}}>$ <Text style={{fontWeight:"bold",color:"black",fontSize:20}}>1,700.00</Text></Text>
        
        </TouchableOpacity>
        <TouchableOpacity
        
        style={{
        backgroundColor: "#DDDD",
        borderRadius:10,
        width:220,
        height:300,
        marginLeft: 120
       
    }}
      >
        <Image source={{uri: 'https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}   
               style={{ width:'100%', height:'100%',borderRadius:10,}} />  
        <Ionicons name="heart-outline" size={20} color="white" style={{ position: 'absolute', top: 10, right: 10 }}></Ionicons>  
        <Text style={{color:"grey",fontSize:20}}>Brompton Bike</Text>
        <Text style={{color:"orange",fontWeight:"bold",fontSize:20}}>$ <Text style={{fontWeight:"bold",color:"black",fontSize:20}}>1,500.00</Text></Text>
        
        </TouchableOpacity>

       
         </View>

         
         <View style={{flexDirection:"row",textAlign:"center",borderRadius:10,marginTop:30}}>
         <TouchableOpacity
        
        style={{
        backgroundColor: "#DDDD",
        borderRadius:10,
        width:220,
        height:300
        
       
    }}
      >
        <Image source={{uri: 'https://images.pexels.com/photos/3068658/pexels-photo-3068658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}   
               style={{ width:'100%', height:'100%',borderRadius:10,}}  />
               <Ionicons name="heart-outline" size={20} color="#FFFF" style={{ position: 'absolute', top: 10, right: 10 }}></Ionicons>  
        <Text style={{color:"grey"}}>Schwinn Bike</Text>
        <Text style={{color:"orange",fontWeight:"bold",fontSize:20}}>$ <Text style={{fontWeight:"bold",color:"black",fontSize:20}}>1,200.00</Text></Text>
        
        </TouchableOpacity>
        <TouchableOpacity
        
        style={{
        backgroundColor: "#DDDD",
        borderRadius:10,
        width:220,
        height:300,
        marginLeft: 120
       
    }}
      >
        <Image source={{uri: 'https://images.pexels.com/photos/2611675/pexels-photo-2611675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}   
               style={{ width:'100%', height:'100%',borderRadius:10,}} />  
        <Ionicons name="heart-outline" size={20} color="white" style={{ position: 'absolute', top: 10, right: 10 }}></Ionicons>  
        <Text style={{color:"grey",fontSize:20}}>Naco Bike</Text>
        <Text style={{color:"orange",fontWeight:"bold",fontSize:20}}>$ <Text style={{fontWeight:"bold",color:"black",fontSize:20}}>980.00</Text></Text>
        
        </TouchableOpacity>

       
         </View>
        
         

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