import React, { useEffect, useReducer, useRef } from "react";
import { Animated, View } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled(Animated.createAnimatedComponent(View))`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 5px;
  align-items: center;
`;
const CardName = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const Card = ({ symbol, index }) => {
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
  return (
    <Wrapper style={{ flex: 0.31, opacity, transform: [{ scale }] }}>
      <CardName>{symbol}</CardName>
    </Wrapper>
  );
};

export default React.memo(Card);
