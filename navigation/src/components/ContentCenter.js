import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const ContentCenter = ({children}) => {
  return (
    <View style={styles.container}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: '#2070b3',
    fontSize: 32
  }
});
