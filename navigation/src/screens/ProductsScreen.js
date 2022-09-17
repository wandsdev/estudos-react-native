import React from "react";
import { Button } from "react-native";
import { ContentCenter } from "../components/ContentCenter";
import { TitleCenter } from "../components/TitleCenter";

export const ProducsScreen = ({ navigation }) => {
  function handleOnPress() {
    navigation.navigate("Detail");
  }

  return (
    <ContentCenter>
      <TitleCenter>Products Screen</TitleCenter>
      <Button title='Producs' onPress={handleOnPress}></Button>
    </ContentCenter>
  );
};
