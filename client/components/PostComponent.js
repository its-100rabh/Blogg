import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import moment from "moment";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import EditModal from "./EditModal";
import { useFonts } from "expo-font";

const PostComponent = ({ post, myPostScreen }) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [Post, setPost] = useState({});
  const navigation = useNavigation();
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/Fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-BlackItalic": require("../assets/Fonts/Poppins/Poppins-BlackItalic.ttf"),
    "Poppins-Bold": require("../assets/Fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-BoldItalic": require("../assets/Fonts/Poppins/Poppins-BoldItalic.ttf"),
    "Poppins-ExtraBold": require("../assets/Fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraBoldItalic": require("../assets/Fonts/Poppins/Poppins-ExtraBoldItalic.ttf"),
    "Poppins-ExtraLight": require("../assets/Fonts/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-ExtraLightItalic": require("../assets/Fonts/Poppins/Poppins-ExtraLightItalic.ttf"),
    "Poppins-Italic": require("../assets/Fonts/Poppins/Poppins-Italic.ttf"),
    "Poppins-Light": require("../assets/Fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/Fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-MediumItalic": require("../assets/Fonts/Poppins/Poppins-MediumItalic.ttf"),
    "Poppins-Regular": require("../assets/Fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/Fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-SemiBoldItalic": require("../assets/Fonts/Poppins/Poppins-SemiBoldItalic.ttf"),
    "Poppins-Thin": require("../assets/Fonts/Poppins/Poppins-Thin.ttf"),
    "Poppins-ThinItalic": require("../assets/Fonts/Poppins/Poppins-ThinItalic.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
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
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Title: {post?.title}</Text>
            {myPostScreen && (
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
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
          </View>
          <Text style={styles.desc}>{post?.description}</Text>
          <View style={styles.footer}>
            {post?.postedBy?.name && (
              <Text>
                <FontAwesome5 name="user" color={"red"} size={14} />{" "}
                {post?.postedBy?.name}
              </Text>
            )}
            <Text>
              <FontAwesome5 name="clock" color={"red"} size={14} />{" "}
              {moment(post?.createdAt).format("DD/MM/YYYY")}
            </Text>
          </View>
        </View>
      ))}
      <Text style={styles.heading}>Total Blogs : {post?.length}</Text>
    </View>
  );
};

export default PostComponent;

const styles = StyleSheet.create({
  heading: {
    color: "green",
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    marginBottom: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#e1d5c9",
    borderWidth: 1,
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    // fontWeight: "bold",
    paddingBottom: 10,
    fontSize: 15,
    fontFamily: "Poppins-SemiBold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    fontFamily: "Poppins-SemiBold",
  },
  warningtext: {
    color: "red",
    fontSize: 12,
    textAlign: "center",
    margin: 10,
    fontFamily: "Poppins-SemiBold",
  },
});
