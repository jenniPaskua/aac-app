import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import Card from "../components/Card";
import { cardData } from "../cardData";
import { Ionicons } from "@expo/vector-icons";
import tts from "react-native-tts";
import { useEffect } from "react";

const Container = styled.View`
  background-color: teal;
  flex: 1;
`;

const List = styled.FlatList`
  padding: 20px 10px;
  width: 100%;
  flex: 8;
`;

const STList = styled.FlatList`
  padding: 20px 10px;
  flex: 1;
  background-color: white;
`;

const STContainer = styled.View`
  width: 70;
  height: 70;
  border-color: grey;
  border-width: 1;
  border-radius: 8;
  justify-content: center;
  align-items: center;
`;

const STTitle = styled.Text`
  color: grey;
  font-weight: 600;
  font-size: 10px;
`;

const STImage = styled.Text`
  font-weight: 600;
  font-size: 40px;
`;

const DelBtn = styled.TouchableOpacity`
  position: absolute;
  top: -10px;
  left: 50px;
  width: 25px;
  height: 25px;
  border-radius: 50;
  border-color: grey;
  background-color: white;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;

const Home: React.FC<NativeStackScreenProps<any, "Home">> = ({
  navigation: { navigate },
}) => {
  const [words, setWords] = useState([]);

  const add = (item) => {
    setWords([
      ...words,
      { id: Math.random().toString(), title: item.title, image: item.image },
    ]);
  };

  const onRemove = (id) => {
    setWords(words.filter((w) => w.id !== id));
  };
  useEffect(() => {
    tts.setDefaultLanguage("ko-KR");
  }, []);

  return (
    <Container>
      <STList
        data={words}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <STContainer>
              <STImage>{item.image}</STImage>
              <STTitle>{item.title}</STTitle>
            </STContainer>
            <DelBtn onPress={() => onRemove(item.id)}>
              <Ionicons name='close' color='grey' size={15} />
            </DelBtn>
          </>
        )}
      />
      <List
        data={cardData}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item, index }) => (
          <Card item={item} selected={() => add(item)} index={index} />
        )}
      />
    </Container>
  );
};

export default Home;
