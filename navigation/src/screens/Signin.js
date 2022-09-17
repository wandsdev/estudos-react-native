import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { ContentCenter } from "../components/ContentCenter";
import { TitleCenter } from "../components/TitleCenter";

export const Signin = () => {
	const navigation = useNavigation();
  function handleOnPress() {
    navigation.replace("Signup");
  }

  return (
    <ContentCenter>
      <TitleCenter>Sign in</TitleCenter>
      <Button title="Signup" onPress={handleOnPress}></Button>
      <Button title="Home" onPress={() => navigation.replace('Home')}></Button>
    </ContentCenter>
  );
};
