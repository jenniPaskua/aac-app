import React, { useEffect, useState, createContext } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import Card from "../components/Card";
import { useDB } from "../context";

const Container = styled.View`
  background-color: teal;
  flex: 1;
`;

const List = styled.FlatList`
  padding: 20px 10px;
  width: 100%;
`;

const STList = styled.FlatList`
  padding: 20px 10px;
  flex: 0.4;
  background-color: white;
`;

const STContainer = styled.View`
  width: 70;
  height: 70;
  border-color: grey;
  border-width: 1;
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

const Home: React.FC<NativeStackScreenProps<any, "Home">> = ({
  navigation: { navigate },
}) => {
  const realm = useDB();
  const [words, setWords] = useState([]);
  const onRealmChange = () => console.log("realm changed!");
  useEffect(() => {
    const words = realm.objects("Word");
    try {
      console.log("words", words);
      words.addListener("change", onRealmChange);
      setWords(words.sorted("_id", true));
    } catch (e) {
      console.error;
    }
    return () => {
      words.removeAllListeners();
    };
  }, []);
  const [cardData, setCardData] = useState([
    { id: "1", title: "멘붕이에요", image: "🤯" },
    { id: "2", title: "슬퍼요", image: "🥲" },
    { id: "3", title: "화가나요", image: "🤬" },
    { id: "4", title: "기뻐요", image: "🤗" },
    { id: "5", title: "사랑해요", image: "🥰" },
    { id: "6", title: "기분좋아요", image: "😊" },
    { id: "7", title: "밥", image: "🍚" },
    { id: "8", title: "주세요", image: "🤲" },
    { id: "9", title: "화장실", image: "🚽" },
  ]);
  return (
    <Container>
      <STList
        data={cardData}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        keyExtractor={(item) => item._id + ""}
        renderItem={({ item, index }) => (
          <STContainer>
            <STImage>{item.image}</STImage>
            <STTitle>{item.title}</STTitle>
          </STContainer>
        )}
      />
      <List
        data={cardData}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <Card index={index} title={item.title} image={item.image} />
        )}
      />
    </Container>
  );
};

export default Home;
