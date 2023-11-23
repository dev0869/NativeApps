import React, { useLayoutEffect, useState } from "react";
import EnterNumber from "./src/components/auth/EnterMobile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Otp from "./src/components/auth/Otp";
import Pcreate from "./src/components/profile/Pcreate";
import GetUser from "./src/utils/getUser";
import { auth } from "./src/configs/firebaseconfig";

const Stack = createNativeStackNavigator();
const App = () => {
  const [user, setUser] = useState<Record<string, any> | null>(null);

  useLayoutEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // onAuthStateChanged is an observer that gets called when the authentication state changes

      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Cleanup the observer when the component unmounts
    return () => unsubscribe();
  }, []); 
  console.log(user)
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={`${user ? "Home" : "login/mobile-number"}`}
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
