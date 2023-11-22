import React, { useState } from "react";
import { login } from "../../../assets";
import { Loginstyle } from "./style";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Alert,
} from "react-native";

const EnterNumber = () => {
  const [mobile, setmobile] = useState("+91");

  const handleTextChange2 = (text: string) => {
    console.log(mobile.length, mobile);
    if (text.length > 10) {
      Alert.alert("Error", "Mobile number should not exceed 10 digits", [
        { text: "OK" },
      ]);
    }
    if (text.match(/^\+91\d*$/)) {
      setmobile(text);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="rgb(55, 61, 233)" barStyle="light-content" />

      <ImageBackground source={login} style={Loginstyle.background}>
        <View style={Loginstyle.container}>
          <View style={Loginstyle.textpad}>
            <Text style={Loginstyle.title}>Welcome Back!</Text>
            <Text style={Loginstyle.subtitle}>Login</Text>
          </View>

          <View style={Loginstyle.inputContainer}>
            <Text style={Loginstyle.label}>Enter Mobile Number</Text>
            <TextInput
              style={Loginstyle.input}
              placeholder="Enter Mobile Number"
              keyboardType="numeric"
              onChangeText={(text) => handleTextChange2(text)}
              value={mobile}
              placeholderTextColor="gray"
              selectionColor="red"
            />
          </View>

          <TouchableOpacity style={Loginstyle.button}>
            <Text style={Loginstyle.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

export default EnterNumber;
