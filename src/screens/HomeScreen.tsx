import { View, Text, Button } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { auth } from "../configs/firebaseconfig";
type props = {
  navigation: NativeStackNavigationProp<any, "login/mobile-number">;
};
function HomeScreen({ navigation }: props) {
   const getUser = auth.onAuthStateChanged((user) => user);
   console.log(getUser);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Login "
        onPress={() => navigation.navigate("login/mobile-number")}
      />
    </View>
  );
}

export default HomeScreen;
