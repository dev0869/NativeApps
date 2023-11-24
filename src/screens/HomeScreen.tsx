import { View, Text, Button, TouchableOpacity } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons/faSquareCheck";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { Loginstyle } from "../components/auth/style";
type props = {
  navigation: NativeStackNavigationProp<any, "login/mobile-number">;
};
function HomeScreen({ navigation }: props) {
  library.add(fab, faSquareCheck, faSquareCheck, faCode);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={Loginstyle.btnText}>
        <FontAwesomeIcon icon="code" />
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
