import React, { useState } from "react";
import { login } from "./assets";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function App() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "yourUsername" && password === "yourPassword") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <ImageBackground
      source={{
        uri: login,
      }}
      style={styles.backgroundImage}
    >
      
      <View  >
        {loggedIn ? (
          <Text>Welcome, {username}!</Text>
        ) : (
          <>
            <TouchableOpacity style={styles.google} onPress={handleLogin}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: "https://freesvg.org/img/1534129544.png" }}
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
                <Text style={{ color: "BLACK", fontWeight: "bold" }}>
                  Log In with Google
                </Text>
                {/* <Login/> */}
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Or</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="white"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  google: {
    width: 300,
    fontWeight: "bold",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,

    padding: 16,
    textAlign: "center",
    backgroundColor: "white",
    color: "#ff00ff",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    padding: 8,
  },
  backgroundImage: {
    backgroundColor: "white",
    flex: 1,
    resizeMode: "cover",
    opacity: 1, // Set the opacity to 1 to display the image without a foggy effect
  },
  container: {
    flex: 1,
    paddingBottom: 49,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // You can adjust the background color opacity
    alignItems: "center",
    justifyContent: "flex-end", // Align the content at the bottom
  },
  input: {
    width: 300,
    height: 55,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    margin: 5,
    padding: 18,
    backgroundColor: "transparent",
    color: "white", 
  },
  button: {
    marginTop: 36,
    marginBottom: 36,
    width: "85%",
    backgroundColor: "#4883BB", 
    padding: 12, 
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    padding: 8,
    fontSize: 14,
    fontWeight: "bold",
  },
});

