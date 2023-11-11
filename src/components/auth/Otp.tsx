import React, { useState } from "react";
import { Verify ,login} from "../../../assets";
import { Verifystyle, Loginstyle } from "./style";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,

  Image,
  StatusBar,
} from "react-native";

const Otp = () => {
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

      <View style={Verifystyle.container}>
        <View>
        <Image
  source={Verify}
  style={{ width: 200, height: 200 }}
  onLoad={() => console.log('Image loaded')}
  onError={(error) => console.error('Image failed to load', error)}
/>

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
    </>
  );
};

export default Otp;
