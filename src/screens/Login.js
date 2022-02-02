import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  TextInput,
  Text,
} from "react-native";
import profile from "../assets/icons/profile.png";
import CustomButton from "../components/CustomButton";

const width = Dimensions.get("screen").width;

export default function Login() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={profile} style={styles.profile} />
      </View>
      <View>
        <TextInput style={styles.form} placeholder="e-mail" />
        <TextInput style={styles.form2} placeholder="senha" />
      </View>
      <View style={styles.btns}>
        <CustomButton
          text="Entrar"
          backgroundColor="#FFFFFF"
          color="#43AB6E"
          width={250}
        />
        <CustomButton
          text="Cadastre-se"
          backgroundColor="#43AB6E"
          color="#fff"
          width={250}
        />
        <Text style={styles.forgot}>Esqueci minha senha</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    backgroundColor: "#43AB6E",
    flex: 1,
  },

  container: {
    margin: 0,
    width: 100,
    alignItems: "center",
  },

  profile: {
    resizeMode: "center",
    margin: 0,
    width: 50,
    height: width,
  },

  form: {
    color: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 250,
    padding: 10,
    height: 35,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DCEFE4",
  },

  form2: {
    color: "#fff",
    borderTopWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 250,
    height: 35,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DCEFE4",
    marginBottom: 30,
  },

  btns: {
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
  },

  forgot: {
    margin: 5,
    color: "#fff",
  },
});
