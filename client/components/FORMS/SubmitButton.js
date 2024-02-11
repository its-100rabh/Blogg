import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const SubmitButton = ({ handleSubmit, btntitle, loading }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttontext}>
        {loading ? "Please Wait" : btntitle}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1e2225",
    height: 50,
    marginHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 20,
  },
  buttontext: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
  },
});
