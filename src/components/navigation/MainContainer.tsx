// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";

// import HomeScreen from "./screens/HomeScreen";
// import DetailScreen from "./screens/DetailScreen";
// import SettingScreen from "./screens/SettingScreen";
// import UserScreen from "./screens/UserScreen";

// const homeName = "Home";
// const detailsName = "Details";
// const settingsName = "Settings";
// const UserName = "Users";

// const Tab = createBottomTabNavigator();

// function MainContainer() {
//   return (

//     <Tab.Navigator
//       initialRouteName={homeName}
//       screenOptions={({ route }) => ({
//         tabBarStyle: { height: 58 },
//         tabBarActiveBackgroundColor: "#4C5CEB",
//         tabBarInactiveBackgroundColor: "#4C5CEB",
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           let rn = route.name;

//           if (rn === homeName) {
//             iconName = focused ? "home" : "home-outline";
//           } else if (rn === detailsName) {
//             iconName = focused ? "list" : "list-outline";
//           } else if (rn === settingsName) {
//             iconName = focused ? "settings" : "settings-outline";}
//             else if (rn === settingsName) {
//               iconName = focused ? "person" : "person-outline";
//             }

//           return (
//             <Ionicons name={iconName as string} size={size} color={color} />
//           );
//         },
//       })}
//       tabBarStyle: { height: 65, paddingBottom: 5 },

//       tabBarOptions={{
//         activeTintColor: "white",
//         inactiveTintColor: "#FFFFF2",

//         labelStyle: { paddingBottom: 4, fontSize: 13 },
//       }}
//     >
//       <Tab.Screen
//         options={{ headerShown: false }}
//         name={homeName}
//         component={HomeScreen}
//       />
//       <Tab.Screen
//         options={{ headerShown: false }}
//         name={UserName}
//         component={UserScreen}
//       />
//       <Tab.Screen
//         options={{ headerShown: false }}
//         name={detailsName}
//         component={DetailScreen}
//       />
//       <Tab.Screen
//         options={{ headerShown: false }}
//         name={settingsName}
//         component={SettingScreen}
//       />
//     </Tab.Navigator>
//   );
// }

// export default MainContainer;

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import SettingScreen from "./screens/SettingScreen";
import UserScreen from "./screens/UserScreen";

const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const userName = "Users";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 65, backgroundColor: "#4C5CEB" },
        tabBarActiveBackgroundColor: "#0d22a8",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === detailsName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === userName) {
            iconName = focused ? "person" : "person-outline"; // Uncommented user icon
          } else if (rn === settingsName) {
            iconName = focused ? "settings" : "settings-outline";
          }

          return (
            <Ionicons name={iconName as string} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#FFFFF2",
        style: {
          backgroundColor: "green",
        },
        labelStyle: { paddingBottom: 4, margin: 1, fontSize: 13 },
      }}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name={homeName}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name={userName}
        component={UserScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name={detailsName}
        component={DetailScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name={settingsName}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
}

export default MainContainer;
