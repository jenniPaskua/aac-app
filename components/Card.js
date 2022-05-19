import React, { useEffect, useReducer, useRef, useState } from "react";
import { Animated, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useDB } from "../context";

const Wrapper = styled(Animated.createAnimatedComponent(View))`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 5px;
  align-items: center;
`;
const CardTitle = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const CardImage = styled.Text`
  font-weight: 600;
  font-size: 40px;
`;

const Card = ({ image, title, index }) => {
  const realm = useDB();
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
      delay: index * 100,
    }).start();
  }, []);
  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1],
  });
  const onPress = (image) => {
    realm.write(() => {
      realm.create("Word", {
        _id: Date.now(),
        title: `title${image}`,
        image: image,
      });
    });
  };
  return (
    <TouchableOpacity style={{ flex: 0.31 }} onPress={() => onPress(image)}>
      <Wrapper style={{ flex: 0.31, opacity, transform: [{ scale }] }}>
        <CardImage>{image}</CardImage>
        <CardTitle>{title}</CardTitle>
      </Wrapper>
    </TouchableOpacity>
  );
};

export default React.memo(Card);
