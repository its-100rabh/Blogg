import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const [state] = useContext(AuthContext);
  return (
    <View>
      <Text>Home</Text>
      <Text>{JSON.stringify(state, null, 4)}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
