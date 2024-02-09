import { StyleSheet, Text, TextInput, View } from "react-native";
import React,{useState} from "react";
import InputBox from "../../components/FORMS/InputBox";

const Register = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.pagetitle}>REGISTER</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox inputTitle={"NAME"} />
        <InputBox
          inputTitle={"E-MAIL"}
          keyboardType="email-address"
          autoComplete="email"
        />
        <InputBox
          inputTitle={"PASSWORD"}
          secureTextEntry={true}
          autoComplete="password"
        />
      </View>
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
});
