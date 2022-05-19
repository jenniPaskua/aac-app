import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import Card from "../components/Card";

const Container = styled.View`
  background-color: teal;
  flex: 1;
`;

const List = styled.FlatList`
  padding: 20px 10px;
  width: 100%;
`;

const Header = styled.View`
  background-color: tomato;
  height: 70px;
`;

const HeaderRight = styled.TouchableOpacity`
  background-color: white;
  width: 20%;
  align-items: flex-end;
`;

const Home: React.FC<NativeStackScreenProps<any, "Home">> = ({
  navigation: { navigate },
}) => {
  const [cardData, setCardData] = useState([
    { id: "1", title: "멘붕이에요", image: "🤯" },
    { id: "2", title: "슬퍼요", image: "🥲" },
    { id: "3", title: "화가나요", image: "🤬" },
    { id: "4", title: "기뻐요", image: "🤗" },
    { id: "5", title: "사랑스러워요", image: "🥰" },
    { id: "6", title: "기분좋아요", image: "😊" },
    { id: "7", title: "밥", image: "🍚" },
    { id: "8", title: "주세요", image: "🤲" },
    { id: "9", title: "화장실", image: "🚽" },
  ]);
  return (
    <Container>
      <List
        data={cardData}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        numColumns={3}
        ListHeaderComponent={
          <>
            <View
              style={{
                height: 50,
                backgroundColor: "tomato",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  width: "80%",
                }}
              >
                {"so.. here is what you say"}
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "20%",
                  backgroundColor: "white",
                }}
              >
                <Text style={{ fontSize: 20 }}>✨</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Card index={index} title={item.title} image={item.image} />
        )}
      />
    </Container>
  );
};

export default Home;
