import React, { useState, useRef } from "react";
import { Verify } from "../../../assets";
import { Verifystyle, Loginstyle, GlobalStyle } from "./style";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { useAppSelector } from "../../redux/hook";
import { signInWithCredential, PhoneAuthProvider } from "firebase/auth";
import { auth } from "../../configs/firebaseconfig";
import {
  AddDocument,
  GetDocById,
  handleFirebaseErr,
} from "../../utils/firebase";
signInWithCredential;
const Otp = ({ navigation }: { navigation: navigation }) => {
  const [verificationCodes, setVerificationCodes] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [errmessage, setErrmessage] = useState("");
  const inputRefs = useRef<Array<TextInput | null>>(Array(6).fill(null));

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
  const verificationId = useAppSelector((st) => st.auth.verificationId);

  const confirmCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCodes.join("")
      );
      const res = await signInWithCredential(auth, credential);
      const isSignUp = await GetDocById("user", res.user.uid);
      if (!isSignUp?.name) {
        await AddDocument("user", res.user.uid, {
          mobile: res.user.phoneNumber,
        });
        return navigation.navigate("login/profile");
      }
      navigation.navigate("Home");
    } catch (error) {
      const err = handleFirebaseErr(error as error);
      typeof err == "string" && setErrmessage(err);
      console.log(err);
    }
  };
  return (
    <>
      <StatusBar backgroundColor="rgb(55, 61, 233)" barStyle="light-content" />

      <View style={Verifystyle.container}>
        <View style={Verifystyle.imgcontainer}>
          <Image
            source={Verify}
            style={{ width: 200, height: 200, marginBottom: 20 }}
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

        <Text style={{ color: "red" }}>{errmessage}</Text>
        <TouchableOpacity onPress={confirmCode} style={Loginstyle.button}>
          <Text style={Loginstyle.btnText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Otp;
