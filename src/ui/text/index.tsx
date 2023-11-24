import { Text } from "react-native";

const H1 = ({ children }: { children: string }) => {
  return (
    <>
      <Text style={{ fontWeight: "600", fontSize: 30 }}>{children}</Text>
    </>
  );
};

export default H1;
