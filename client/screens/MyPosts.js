import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/MENUS/FooterMenu";
import { PostContext } from "../context/postContext";
import PostComponent from "../components/PostComponent";
import axios from "axios";

const MyPosts = () => {
  // const [state] = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUserPosts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/post/get-user-posts");
      setLoading(false);
      setPosts(data?.userPost);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert(error);
    }
  };

  //initial
  useEffect(() => {
    getUserPosts();
  }, []);
  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(post, null, 4)}</Text> */}
      <ScrollView>
        <Text>{JSON.stringify(posts, null, 4)}</Text>
      </ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <FooterMenu />
      </View>
    </View>
  );
};

export default MyPosts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
});
