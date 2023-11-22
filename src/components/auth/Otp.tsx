
import React, { useState, useRef } from "react";
import { Verify } from "../../../assets";
import { Verifystyle, Loginstyle, GlobalStyle } from "./style";
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from "react-native";

const Otp: React.FC = () => {
  const [verificationCodes, setVerificationCodes] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<Array<TextInput | null>>(Array(4).fill(null));

  const handleChange = (index: number, value: string) => {
    setVerificationCodes((prevCodes) => {
      const newCodes = [...prevCodes];
      newCodes[index] = value;

      if (value.length === 1 && index < newCodes.length - 1) {
        const nextIndex = index + 1;
        const nextInputRef = inputRefs.current[nextIndex];

        if (nextInputRef) {
          nextInputRef.focus();
        }
      }

      return newCodes;
    });
  };

  return (
    <>
      <StatusBar backgroundColor="rgb(55, 61, 233)" barStyle="light-content" />

      <View style={Verifystyle.container}>
        <View style={Verifystyle.imgcontainer}>
          <Image
            source={Verify}
            style={{ width: 200, height: 200, marginBottom: 20 }}
            onLoad={() => console.log("Image loaded")}
            onError={(error) => console.error("Image failed to load", error)}
          />

          <Text style={GlobalStyle.heading}>Enter Verification Code</Text>
          <Text style={GlobalStyle.smpara}>
            We are automatically a SVS send to your mobile number
          </Text>
        </View>

        <View style={Verifystyle.input}>
          {verificationCodes.map((code, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              style={Verifystyle.inputs}
              maxLength={1}
              value={code}
              keyboardType="numeric"
              onChangeText={(text) => handleChange(index, text)}  
              onKeyPress={(event) => {
                if (event.nativeEvent.key === "Backspace" && index > 0) {
                  const prevIndex = index - 1;
                  const prevInputRef = inputRefs.current[prevIndex];

                  if (prevInputRef) {
                    prevInputRef.focus();
                  }
                }
              }}
            />
          ))}
        </View>

        <TouchableOpacity style={Loginstyle.button}>
          <Text style={Loginstyle.btnText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Otp;
