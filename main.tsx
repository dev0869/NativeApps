import React, { useLayoutEffect, useState } from "react";
import EnterNumber from "./src/components/auth/EnterMobile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Otp from "./src/components/auth/Otp";
import Pcreate from "./src/components/profile/Pcreate";
import GetUser from "./src/utils/getUser";

const Stack = createNativeStackNavigator();
const App = () => {
  const user = GetUser();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={`${!user ? "login/profile" : "login/profile"}`}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            options={{ title: "Login " }}
            name="login/mobile-number"
            component={EnterNumber}
          />
          <Stack.Screen
            options={{ title: "OTP " }}
            name="login/verify-otp"
            component={Otp}
          />
          <Stack.Screen
            options={{ title: "Add Profile " }}
            name="login/profile"
            component={Pcreate}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
