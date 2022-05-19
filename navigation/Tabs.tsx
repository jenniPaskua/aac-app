import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import Stack from "./Stack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"home"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Setting'
        component={Setting}
        options={{
          title: "설정",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"settings"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
