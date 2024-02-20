import { Image, StyleSheet, Text, TextInput, View } from "react-native";
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
      <View style={styles.input}>
        <Text style={styles.inputText}>Name</Text>
        <TextInput style={styles.inputBox} value={state?.user.name} />
      </View>
      <View style={styles.input}>
        <Text style={styles.inputText}>E-mail</Text>
        <TextInput
          style={styles.inputBox}
          value={state?.user.email}
          editable={false}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput style={styles.inputBox} value={state?.user.password} />
      </View>
      <View style={styles.input}>
        <Text style={styles.inputText}>Role</Text>
        <TextInput
          style={styles.inputBox}
          value={state?.user.role}
          editable={false}
        />
      </View>
      {/* <Text>NAME : {state?.user.name}</Text>
      <Text>Email : {state?.user.email}</Text>
      <Text>ROLE : {state?.user.role}</Text> */}
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
  input: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    fontWeight: "bold",
    width: 70,
    color: "gray",
    fontSize: 15,
  },
  inputBox: {
    width: 250,
    backgroundColor: "#ffffff",
    marginLeft: 10,
    fontSize: 16,
    paddingLeft: 20,
    borderRadius: 5,
  },
});
