import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Realm from "realm";
import AppLoading from "expo-app-loading";
import Root from "./navigation/Root";

const WordSchema = {
  name: "Word",
  properties: {
    _id: "int",
    emotion: "string",
    message: "string",
  },
  primaryKey: "_id",
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [realm, setRealm] = useState(null);
  // const startLoading = async () => {
  //   const connection = await Realm.open({
  //     path: "aacDB",
  //     schema: [WordSchema],
  //   });
  //   setRealm(connection);
  // };
  const onFinish = () => setReady(true);
  // if (!ready) {
  // return (
  // <AppLoading
  //   onError={console.error}
  //   startAsync={startLoading}
  //   onFinish={onFinish}
  // />
  // );
  // }
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
