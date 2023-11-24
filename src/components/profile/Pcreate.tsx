import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { Loginstyle } from "../auth/style";
import { ProfileStyle } from "./style";
import { useAppSelector } from "../../redux/hook";
import { AddDocument } from "../../utils/firebase";

interface FormData {
  name: string;
  email: string;
  pinCode: string;
  address: string;
}

export default function Pcreate() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [file, setFile] = useState(
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=740&t=st=1699874098~exp=1699874698~hmac=2b658424d49056aa9e1471560b2a60b95dcc9c8d9277f6db66ea9e436de16757"
  );
  const [error, setError] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera roll permission to upload images."
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled) {
        setFile(result.assets[0].uri);
        setError(null);
      }
    }
  };
  const user = useAppSelector((st) => st.auth.user);
  console.log(user);

  const onSubmit = async (data: FormData) => {
    try {
      await AddDocument("user", user?.id, {
        ...user,
        ...data,
        ...{ img: file },
      });
    } catch (error) {
      Alert.alert((error as error).message);
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
          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                style={ProfileStyle.input}
                placeholder="Enter Full Name"
                onChangeText={(text) => {
                  setValue("name", text);
                  field.onChange(text);
                }}
                value={field.value}
                placeholderTextColor="violet"
                selectionColor="red"
              />
            )}
            name="name"
            rules={{ required: "Name is required" }}
          />

          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                style={ProfileStyle.input2}
                placeholder="Enter Email ID"
                onChangeText={(text) => {
                  setValue("email", text);
                  field.onChange(text);
                }}
                value={field.value}
                placeholderTextColor="violet"
                selectionColor="red"
              />
            )}
            name="email"
            rules={{ required: "Email ID is required" }}
          />

          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                style={ProfileStyle.input2}
                placeholder="Enter PinCode"
                onChangeText={(text) => {
                  setValue("pinCode", text);
                  field.onChange(text);
                }}
                value={field.value}
                placeholderTextColor="violet"
                selectionColor="red"
              />
            )}
            name="pinCode"
            rules={{ required: "PinCode is required" }}
          />

          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                editable
                style={ProfileStyle.input3}
                placeholder="Cuurent Address"
                maxLength={40}
                onChangeText={(text) => {
                  setValue("address", text);
                  field.onChange(text);
                }}
                value={field.value}
              />
            )}
            name="address"
            rules={{ required: "Address is required" }}
          />

          <TouchableOpacity
            style={Loginstyle.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={Loginstyle.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
