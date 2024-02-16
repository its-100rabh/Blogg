import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import InputBox from "../../components/FORMS/InputBox";
import SubmitButton from "../../components/FORMS/SubmitButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Login = ({ navigation }) => {
  //global state
  const [state, setState] = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please fill all fields.");
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post("/auth/login", { email, password });
      setState(data);
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      alert(data && data.message);
      navigation.navigate("Home");
      console.log("Data => ", { email, password });
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };
  //temp function to check local storage data
  const localStorageData = async () => {
    let data = await AsyncStorage.getItem("@auth");
    console.log("Local Storage => ", data);
  };
  localStorageData();
  return (
    <View style={styles.container}>
      <Text style={styles.pagetitle}>LOGIN</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          inputTitle={"E-MAIL"}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"PASSWORD"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      {/* <Text>{JSON.stringify({name,email,password},null,4)}</Text> */}
      <SubmitButton
        btntitle="LOGIN"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>
        Not Registered?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          REGISTER
        </Text>{" "}
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e1d5c9",
  },
  pagetitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e2225",
    marginBottom: 20,
  },
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "gray",
    fontSize: 16,
  },
  linkText: {
    textAlign: "center",
  },
  link: {
    color: "red",
  },
});
