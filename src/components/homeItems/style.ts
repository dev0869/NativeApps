import { StyleSheet } from "react-native";

export const CardStyle = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30, 
        backgroundColor: 'lightgray', 
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', 
      },
      avatarImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
      },
card:{
    width:150,
    height:200,
    borderRadius:20,
    padding:20,
    shadowOffset: {width: -2, height: 2},  
  
    shadowOpacity: 0.1,  
    shadowRadius: 3,  
    display:'flex',justifyContent:'center',
    alignItems:'center',
    backdropFilter:' blur(188px)',
}


})
