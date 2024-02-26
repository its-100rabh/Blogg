import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/MENUS/FooterMenu";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import axios from "axios";

const Post = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  //handle form post data
  const handlePost = async () => {
    // alert(`Your post title is ${title} and post description is ${description}`);
    try {
      setLoading(true);
      if (!title) {
        alert("Please add the post title.");
      }
      if (!description) {
        alert("Please add the post description.");
      }
      const { data } = await axios.post("/post/create-post", {
        title,
        description,
      });
      setLoading(false);
      alert(data?.message);
      navigation.navigate("Home");
    } catch (error) {
      alert(error.response.data.message || error.message);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.heading}>Create a Post</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Add post title"
            placeholderTextColor={"gray"}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Add post description"
            placeholderTextColor={"gray"}
            multiline={true}
            numberOfLines={6}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.postBtn} onPress={handlePost}>
            <Text style={styles.postBtntext}>
              <FontAwesome5 name="plus-square" size={14} />
              {"  "}
              CREATE
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    textAlignVertical: "top",
    paddingTop: 10,
    width: 320,
    marginTop: 30,
    fontSize: 13,
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  postBtn: {
    backgroundColor: "black",
    width: 300,
    marginTop: 30,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  postBtntext: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
