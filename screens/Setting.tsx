import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import React from "react";

const Setting: React.FC<NativeStackScreenProps<any, "Setting">> = () => {
  return (
    <View>
      <Text>Setting!!!</Text>
    </View>
  );
};

export default Setting;
