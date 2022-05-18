import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/Detail";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <NativeStack.Screen name='Detail' component={Detail} />
    </NativeStack.Navigator>
  );
};

export default Stack;
