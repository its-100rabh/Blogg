import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/MENUS/FooterMenu";
import axios from "axios";

const Account = () => {
  const [state, setState] = useContext(AuthContext);
  const { user } = state;
  //local state
  const [name, setName] = useState(user?.name);
  const [password, setPassword] = useState(user?.password);
  const [email] = useState(user?.email);
  const [loading, setLoading] = useState(false);

  //onPress
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put("/auth/update-user", {
        name,
        password,
        email,
      });
      setLoading(false);
      let ud = JSON.stringify(data);
      setState({ ...state, user: ud?.updatedUser });
      alert(data && data.message);
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
            style={{ height: 200, width: 200 }}
          />
        </View>
        <Text style={styles.warningtext}>
          You can currently update your name and password only.
        </Text>
        <View style={styles.input}>
          <Text style={styles.inputText}>Name</Text>
          <TextInput
            style={styles.inputBox}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>E-mail</Text>
          <TextInput style={styles.inputBox} value={email} editable={false} />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>Role</Text>
          <TextInput
            style={styles.inputBox}
            value={state?.user.role}
            editable={false}
          />
        </View>
        <View style={{ alignItems: "center", margin: 20 }}>
          <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
            <Text style={styles.updateBtntext}>Update Profile</Text>
          </TouchableOpacity>
        </View>
        {/* <Text>NAME : {state?.user.name}</Text>
      <Text>Email : {state?.user.email}</Text>
      
      <Text>ROLE : {state?.user.role}</Text> */}
      </ScrollView>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <FooterMenu />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 40,
    margin: 10,
  },
  warningtext: {
    color: "red",
    fontSize: 12,
    textAlign: "center",
    margin: 10,
  },
  input: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    fontWeight: "bold",
    width: 70,
    color: "gray",
    fontSize: 15,
  },
  inputBox: {
    width: 250,
    backgroundColor: "#ffffff",
    marginLeft: 10,
    fontSize: 16,
    paddingLeft: 20,
    borderRadius: 5,
  },
  updateBtn: {
    backgroundColor: "black",
    height: 40,
    width: 250,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  updateBtntext: {
    color: "white",
    fontSize: 16,
  },
});
