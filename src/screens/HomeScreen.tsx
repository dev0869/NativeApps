import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  console.log(navigation);
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
