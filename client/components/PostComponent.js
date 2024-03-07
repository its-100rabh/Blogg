import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import moment from "moment";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import EditModal from "./EditModal";

const PostComponent = ({ post, myPostScreen }) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [Post, setPost] = useState({});
  const navigation = useNavigation();
  //handlepromt
  const handleDeletePrompt = (id) => {
    Alert.alert("Attention:", "Are you sure you want to delete the post?", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("Cancel Pressed");
        },
      },
      {
        text: "Delete",
        onPress: () => handleDeletePost(id),
      },
    ]);
  };

  //delete
  const handleDeletePost = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.delete(`/post/delete-post/${id}`);
      setLoading(false);
      alert(data?.message);
      navigation.push("MyPosts");
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert(error);
    }
  };
  return (
    <View>
      <Text style={styles.heading}>Total Blogs : {post?.length}</Text>
      <Text style={styles.warningtext}>
        *Restart the app to check the latest blogs on the top.
      </Text>
      {myPostScreen && (
        <EditModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          Post={Post}
        />
      )}
      {post?.map((post, i) => (
        <View style={styles.card} key={i}>
          {myPostScreen && (
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text style={{ marginHorizontal: 20 }}>
                <FontAwesome5
                  name="pen"
                  size={16}
                  color={"darkblue"}
                  onPress={() => {
                    setPost(post), setModalVisible(true);
                  }}
                />
              </Text>
              <Text>
                <FontAwesome5
                  name="trash"
                  size={16}
                  color={"red"}
                  onPress={() => handleDeletePrompt(post?._id)}
                />{" "}
              </Text>
            </View>
          )}

          <Text style={styles.title}>Title : {post?.title}</Text>
          <Text style={styles.desc}> {post?.description}</Text>
          <View style={styles.footer}>
            {post?.postedBy?.name && (
              <Text>
                {" "}
                <FontAwesome5 name="user" color={"orange"} />{" "}
                {post?.postedBy?.name}
              </Text>
            )}
            <Text>
              {" "}
              <FontAwesome5 name="clock" color={"orange"} />{" "}
              {moment(post?.createdAt).format("DD:MM:YYYY")}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PostComponent;

const styles = StyleSheet.create({
  heading: {
    color: "green",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 0.2,
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  warningtext: {
    color: "red",
    fontSize: 12,
    textAlign: "center",
    margin: 10,
  },
});
