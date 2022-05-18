import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";

const Detail: React.FC<NativeStackScreenProps<any, "Detail">> = () => {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;
