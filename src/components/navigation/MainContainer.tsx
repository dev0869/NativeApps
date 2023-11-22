import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import SettingScreen from "./screens/SettingScreen";
import UserScreen from "./screens/UserScreen";

const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const UserName="Users";

const Tab = createBottomTabNavigator();

interface Options {
  activeTintColor: string;
  inactiveTintColor: string;
  labelStyle: {
    paddingBottom: number;
    fontSize: number;
  };
  style: {
    padding: number;
    height: number;
    backgroundColor: string; 
  };
}

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 58 },
          tabBarActiveBackgroundColor: "#4C5CEB",
          tabBarInactiveBackgroundColor: "#4C5CEB",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "Users" : "person-outline";
            }

            return (
              <Ionicons name={iconName as string} size={size} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "#FFFFF2",

          labelStyle: { paddingBottom: 4, fontSize: 13 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={UserName} component={UserScreen} />
        <Tab.Screen name={detailsName} component={DetailScreen} />
        <Tab.Screen name={settingsName} component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
