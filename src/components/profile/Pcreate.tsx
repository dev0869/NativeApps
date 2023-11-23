import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Loginstyle } from "../auth/style";
import { ProfileStyle } from "./style";

export default function Pcreate() {
  const [number2, setNumber2] = useState("");
  const [file, setFile] = useState<null | string>(
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=740&t=st=1699874098~exp=1699874698~hmac=2b658424d49056aa9e1471560b2a60b95dcc9c8d9277f6db66ea9e436de16757"
  );
  console.log(file);
  const handleTextChange2 = (text: string) => {
    setNumber2(text);
  };

  const [error, setError] = useState(null);
  const [value, onChangeText] = React.useState("Enter Address");

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera  
                 roll permission to upload images.`
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        console.log(result);

        setFile(result.assets[0].uri);

        setError(null);
      }
    }
  };

  return (
    <>
      <StatusBar backgroundColor="rgb(55, 61, 233)" barStyle="light-content" />

      <View style={ProfileStyle.container}>
        <Text style={ProfileStyle.heading}>Create Profile</Text>

        <TouchableOpacity style={ProfileStyle.profile} onPress={pickImage}>
          <Image source={{ uri: file }} style={ProfileStyle.image} />
        </TouchableOpacity>

        <View style={Loginstyle.inputContainer}>
          <TextInput
            style={ProfileStyle.input}
            placeholder="Enter Mobile Number"
            onChangeText={(text) => handleTextChange2(text)}
            value={number2}
            placeholderTextColor="voilet"
            selectionColor="red"
          />
          <TextInput
            style={ProfileStyle.input2}
            placeholder="Enter Email ID"
            onChangeText={(text) => handleTextChange2(text)}
            value={number2}
            placeholderTextColor="voilet"
            selectionColor="red"
          />
          <TextInput
            style={ProfileStyle.input2}
            placeholder="Enter PinCode"
            onChangeText={(text) => handleTextChange2(text)}
            value={number2}
            placeholderTextColor="voilet"
            selectionColor="red"
          />
          <TextInput
            editable
            style={ProfileStyle.input3}
            maxLength={40}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
          <TouchableOpacity style={Loginstyle.button}>
            <Text style={Loginstyle.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
});
