import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PostComponent = ({ post }) => {
  return (
    <View>
      <Text style={styles.heading}>Total Post : {post?.length}</Text>
      {post?.map((post, i) => (
        <View>
          <Text>Title: {post?.title}</Text>
          <Text>Description: {post?.description}</Text>
          <View>
            <Text>Posted By: {post?.postedBy?.name}</Text>
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
});
