import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AuthProvider } from "./context/authContext";
import ScreenMenu from "./components/MENUS/ScreenMenu";
import { PostProvider } from "./context/postContext";

const RootNavigation = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <ScreenMenu />
      </PostProvider>
    </AuthProvider>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
