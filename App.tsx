import React from "react";
import EnterNumber from "./src/components/auth/EnterMobile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            options={{ title: "Login " }}
            name="login/mobile-number"
            component={EnterNumber}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
