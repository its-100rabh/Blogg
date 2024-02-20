import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/MENUS/FooterMenu";

const Account = () => {
  const [state] = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          style={{ height: 200, width: 200 }}
        />
      </View>
      <Text style={styles.warningtext}>
        You can currently update your name and password only.
      </Text>
      <Text>NAME : {state?.user.name}</Text>
      <Text>Email : {state?.user.email}</Text>
      <Text>ROLE : {state?.user.role}</Text>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <FooterMenu />
      </View>
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
  warningtext: {
    color: "red",
    fontSize: 12,
    textAlign: "center",
    margin: 10,
  },
});
