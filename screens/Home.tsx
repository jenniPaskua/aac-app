import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Card from "../components/Card";

const Container = styled.View`
  background-color: tomato;
  flex: 1;
`;

const List = styled.FlatList`
  padding: 20px 10px;
  width: 100%;
`;

const Home: React.FC<NativeStackScreenProps<any, "Home">> = ({
  navigation: { navigate },
}) => {
  const [cardData, setCardData] = useState([
    { id: "1", name: "1.name", symbol: "1.symbol" },
    { id: "2", name: "2.name", symbol: "2.symbol" },
    { id: "3", name: "3.name", symbol: "3.symbol" },
    { id: "4", name: "4.name", symbol: "4.symbol" },
    { id: "5", name: "5.name", symbol: "5.symbol" },
    { id: "6", name: "6.name", symbol: "6.symbol" },
  ]);
  return (
    <Container>
      <List
        data={cardData}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Card index={index} symbol={item.symbol} />
        )}
      />
    </Container>
  );
};

export default Home;
