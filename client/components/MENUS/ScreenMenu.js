import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Register from "../../screens/auth/Register";
import Login from "../../screens/auth/Login";
import { AuthContext } from "../../context/authContext";
import HeaderMenu from "./HeaderMenu";
import Post from "../../screens/Post";
import About from "../../screens/About";
import Account from "../../screens/Account";
import MyPosts from "../../screens/MyPosts";

const ScreenMenu = () => {
  const [state] = useContext(AuthContext);

  const authUser = state?.user && state?.token;
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      {authUser ? (
        <>
          <Stack.Screen
            name="Home"
            options={{ headerRight: () => <HeaderMenu /> }}
            component={Home}
          />
          <Stack.Screen
            name="Post"
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HeaderMenu />,
            }}
            component={Post}
          />
          <Stack.Screen
            name="MyPosts"
            options={{ headerRight: () => <HeaderMenu /> }}
            component={MyPosts}
          />
          <Stack.Screen
            name="Account"
            options={{ headerRight: () => <HeaderMenu /> }}
            component={Account}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Register"
            options={{ headerShown: false }}
            component={Register}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ScreenMenu;

const styles = StyleSheet.create({});
