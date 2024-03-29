import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import InputBox from "../../components/FORMS/InputBox";
import SubmitButton from "../../components/FORMS/SubmitButton";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert("Please fill all fields.");
        setLoading(false);
        return;
      }
      setLoading(false);
      //localhost will not work because both the server and this is working on localhost. Use IP instead
      const { data } = await axios.post("/auth/register", {
        name,
        email,
        password,
      });
      alert(data && data.message);
      navigation.navigate("Login");
      console.log("Data => ", { name, email, password });
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.pagetitle}>REGISTER</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox inputTitle={"NAME"} value={name} setValue={setName} />
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
        btntitle="REGISTER"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>
        Already Registered?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          LOGIN
        </Text>{" "}
      </Text>
    </View>
  );
};

export default Register;

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
