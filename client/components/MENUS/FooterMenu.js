import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FooterMenu = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FontAwesome5
          name="home"
          style={styles.iconstyle}
          color={route.name === "Home" && "orange"}
        />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Post")}>
        <FontAwesome5
          name="plus-square"
          style={styles.iconstyle}
          color={route.name === "Post" && "orange"}
        />
        <Text>Blog</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MyPosts")}>
        <FontAwesome5
          name="list"
          style={styles.iconstyle}
          color={route.name === "MyPosts" && "orange"}
        />
        <Text>My Blogs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <FontAwesome5
          name="user"
          style={styles.iconstyle}
          color={route.name === "Account" && "orange"}
        />
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  iconstyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
  },
});
