import { View, Text, Image } from 'react-native'
import React from 'react'

const Grid = ({item}) => {
  return (
    <View style={{width:150,height:150,display:'flex',alignItems:"center",justifyContent:'center',borderWidth:1,borderColor:'black',margin:10}}>
    <Image 
    style={{width:120,height:120}}
    source={{
     uri:item.url
    }}
    />
   <Text style={{fontSize:18,fontWeight:'bold',}}>{item.type}</Text>
  
   </View>
  )
}

export default Grid