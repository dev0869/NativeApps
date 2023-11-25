import React from "react";
import { Bg } from "../../assets";
import {
  View,
  ImageBackground,
  ScrollView,

} from "react-native";
import { GlobalStyle } from "../components/auth/style";
import MenuItems from "../components/homeItems/MenuItems";
import { Navbar } from "../components/homeItems/Navbar";

const HomeScreen = () => {
  return (
    <>
      <ImageBackground source={Bg} style={{ flex: 1 }}>
      <ScrollView>


        <View style={GlobalStyle.layout}>
          <Navbar />
          <br />
          <br />
          <MenuItems />
        </View>
        <br /><br />
      </ScrollView>
      </ImageBackground>
    </>
  );
};

export default HomeScreen;
