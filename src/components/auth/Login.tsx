

import React, { useState } from "react";
import { login } from "../../../assets";
import { Loginstyle } from "./style";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StatusBar } from "react-native";

const Login = () => {
  const [number1, setNumber1] = useState("+91");
  const [password, setPassword] = useState("");
  const [number2, setNumber2] = useState("+91");

  const handleTextChange1 = (text: string) => {
    if (text.match(/^\+91\d*$/)) {
      setNumber1(text);
    }
  };

  const handleTextChange2 = (text: string) => {
    if (text.match(/^\+91\d*$/)) {
      setNumber2(text);
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
              value={number2}
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

export default Login;
