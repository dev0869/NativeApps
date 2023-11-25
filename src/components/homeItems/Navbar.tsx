import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { GlobalStyle } from "../auth/style";
import { useAppSelector } from "../../redux/hook";
import { CardStyle } from "./style";
export const Navbar = () => {
  const user = useAppSelector((st) => st.auth.user);
  console.log(user);

  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >

        <View style={{display:'flex',flexDirection:'row' ,alignItems:'center',gap:14}}>

        <View style={CardStyle.avatar}>
          <Image source={user?.img} style={CardStyle.avatarImage} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#4C5CEB",
            }}
          >
            {user?.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: "rgb(56 54 54)",
            }}
          >
            {user?.email}
          </Text>
        </View>
        </View>

        <TouchableOpacity
          style={{
            padding: 14,
            borderColor: "#4C5CEB",
            borderRadius: 14,
            borderWidth: 1,
            shadowColor: "#4C5CEB",

            shadowOpacity: 0.5,
            shadowRadius: 2,
          }}
        >
          <FontAwesomeIcon size={24} color="#4C5CEB" icon="magnifying-glass" />
        </TouchableOpacity>
      </View>
    </>
  );
};
