import React, { useState } from "react";
import EnterNumber from "./src/components/auth/EnterMobile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Otp from "./src/components/auth/Otp";
import Pcreate from "./src/components/profile/Pcreate";
import GetUser from "./src/utils/getUser";
import MainContainer from "./src/components/navigation/MainContainer";

const Stack = createNativeStackNavigator();
const App = () => {
  const user = GetUser();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={`${!user ? "Main" : "login/profile"}`}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
       options={{headerShown: false}}
            name="login/mobile-number"
            component={EnterNumber}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="login/verify-otp"
            component={Otp}
          />
          <Stack.Screen
            options={{  headerShown: false }}
            name="login/profile"
            component={Pcreate}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Main"
            component={MainContainer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
