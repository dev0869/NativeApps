import React from "react";
import { data } from "./constant";
import { Image, Text, View } from "react-native";
import { CardStyle } from "./style";
const MenuItems = () => {
  return (
    <>


      <View
        style={{ alignItems: "center", display: "flex",gap:20, flexDirection: "row"  ,justifyContent:"space-evenly",flexWrap:'wrap'}}
      >
        {data.map((item, index) => (
          <View key={index} style={CardStyle.card}>
            <Image source={item.icons} style={{ width: 120, height: 120 }} />
            <Text style={{fontSize:18,fontWeight:"semibold"}}>{item.name}</Text>
          </View>
        ))}
      </View>
    
    </>
  );
};

export default MenuItems;
