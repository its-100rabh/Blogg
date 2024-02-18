import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/MENUS/FooterMenu";

const Account = () => {
  return (
    <View style={styles.container}>
      <FooterMenu />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 40,
    margin: 10,
  },
});
