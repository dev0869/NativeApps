import React from "react";
import { useAppSelector } from "../../../redux/hook";
import { Bg } from "../../../../assets";
import {
  View,
  ImageBackground,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { GlobalStyle, Loginstyle } from "../../auth/style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
const HomeScreen = () => {
  const user = useAppSelector((st) => st.auth.user);
  console.log(user?.name);
  return (
    <>
      <ImageBackground source={Bg} style={{ flex: 1 }}>
        <View style={GlobalStyle.layout}>
          <View style={{ display: "flex" }}>
            <View>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  color: "rgb(56 54 54)",
                }}
              >
                {user?.name}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "rgb(56 54 54)",
                }}
              >
                {user?.email}
              </Text>
            </View>

            <TouchableOpacity style={{backgroundColor:"red"}} >
              <FontAwesomeIcon icon="bars" />
              <Text>Go To Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default HomeScreen;
