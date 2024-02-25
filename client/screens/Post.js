import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/MENUS/FooterMenu";

const Post = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.heading}>Create a Post</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Add post title"
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Add post description"
          placeholderTextColor={"gray"}
          multiline={true}
          numberOfLines={6}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <FooterMenu />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
    marginTop: 20,
  },
  heading: {
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
  },
  inputBox: {
    backgroundColor: "white",
    width: 320,
    marginTop: 30,
    fontSize: 13,
    paddingLeft: 15,
    borderWidth: 1,
  },
});
