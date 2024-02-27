import { StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PostComponent = ({ post }) => {
  return (
    <View>
      <Text style={styles.heading}>Total Post : {post?.length}</Text>
      {post?.map((post, i) => (
        <View style={styles.card}>
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
});
