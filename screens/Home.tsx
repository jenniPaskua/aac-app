import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import React from "react";

const Home = ({ navigation: { navigate } }) => {
  const navigation = useNavigation();
  //@ts-ignore
  const goToDetail = () => {
    navigation.navigate("Stack", { screen: "Detail" });
  };
  return (
    <TouchableOpacity
      onPress={goToDetail}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Home!</Text>
    </TouchableOpacity>
  );
};

export default Home;
