import { View, Text, Button, TouchableOpacity } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { Loginstyle } from "../components/auth/style";
import H1 from "../ui/text";
type props = {
  navigation: NativeStackNavigationProp<any, "login/mobile-number">;
};

function HomeScreen({ navigation }: props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <H1>dsffsdf</H1>
      <TouchableOpacity style={Loginstyle.btnText}>
        <FontAwesomeIcon icon="bars" />
        <Text>Go To Login</Text>
      </TouchableOpacity>
      <Button
    
        title="Go To Login "
        onPress={() => navigation.navigate("login/mobile-number")}
      />
    </View>
  );
}

export default HomeScreen;
