import React, { useState, useRef } from "react";
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
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { auth, firebaseConfig } from "../../configs/firebaseconfig";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setVerificationId } from "../../features/auth/authSlice";
import { PhoneAuthProvider } from "firebase/auth";
import { handleFirebaseErr } from "../../utils/firebase";
const EnterNumber = ({ navigation }: { navigation: navigation }) => {
  const [mobile, setmobile] = useState("+91");
  const [errmessage, setErrmessage] = useState("");
  const dispatch = useAppDispatch();
  const recaptchaVerifier: any = useRef(null);
  const handlemobile = (text: string) => {
    if (text.length < 13) {
      setmobile(text);
      return;
    }
    if (mobile.length == 13)
      return Alert.alert("Mobile number should not be greater than 10 digits");
    setmobile(text);
  };
  const sendVerification = async () => {
    setErrmessage("")
    const number = mobile.split("+91")[1];
    if (number.length < 10) return Alert.alert("Invalid Mobile number");
    try {
      const provider = new PhoneAuthProvider(auth);
      const res = await provider.verifyPhoneNumber(
        mobile,
        recaptchaVerifier?.current
      );
      dispatch(setVerificationId(res));
      navigation.navigate("login/verify-otp");
    } catch (error) {
      const err = handleFirebaseErr(error as error);
      typeof err == "string" && setErrmessage(err);
      throw err;
    }
  };
  console.log(useAppSelector((st)=>st.auth.user))
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
              onChangeText={handlemobile}
              value={mobile}
              placeholderTextColor="gray"
              selectionColor="red"
            />
          </View>
          <Text style={{color:"red"}}>{errmessage}</Text>

          {!errmessage &&<FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
          />}

          <TouchableOpacity
            onPress={sendVerification}
            style={Loginstyle.button}
          >
            <Text style={Loginstyle.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

export default EnterNumber;
