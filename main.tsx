import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  console.log(navigation);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="dsf" onPress={() => navigation.navigate("login")} />
    </View>
  );
}

export default HomeScreen