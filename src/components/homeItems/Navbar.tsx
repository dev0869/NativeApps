import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { GlobalStyle } from "../auth/style";
import { useAppSelector } from "../../redux/hook";
export const Navbar = () => {
  const user = useAppSelector((st) => st.auth.user);

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
          <View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "#4C5CEB",
              }}
            >
              Hi {user?.name}!
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                color: "rgb(56 54 54)",
              }}
            >
              {user?.email}
            </Text>
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
            <FontAwesomeIcon size={29} color="#4C5CEB" icon="bars" />
          </TouchableOpacity>
        </View>
    
    </>
  );
};
