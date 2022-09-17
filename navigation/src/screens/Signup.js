import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { ContentCenter } from "../components/ContentCenter";
import { TitleCenter } from "../components/TitleCenter";

export const Signup = () => {
  const navigation = useNavigation();

  function handleOnPress() {
    navigation.replace("Signin");
  }

  return (
    <ContentCenter>
      <TitleCenter>Sign up</TitleCenter>
      <Button title="Signin" onPress={handleOnPress}></Button>
    </ContentCenter>
  );
};
