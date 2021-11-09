import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  TextInput,
  Text,
} from "react-native";
import profile from "../assets/profile.png";
import CustomButton from "../components/CustomButton";

const width = Dimensions.get("screen").width;

export default function Login() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={profile} style={styles.profile} />
      </View>
      <View>
        <TextInput style={styles.form} placeholder="E-mail" />
        <TextInput style={styles.form2} placeholder="Senha" />
      </View>
      <View style={styles.btns}>
        <CustomButton text="Entrar" backgroundColor="#FFFFFF" color="#43AB6E" />
        <CustomButton text="Cadastre-se" backgroundColor="#43AB6E" />
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: 300,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DCEFE4",
  },

  form2: {
    borderTopWidth: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: 300,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DCEFE4",
  },

  btns: {
    padding: "5%",
    justifyContent: "center",
    alignItems: "center",
  },

  forgot: {
    margin: "5%",
  },

  profile: {
    resizeMode: "center",
    marginTop: "10%",
    width: "50%",
    height: width,
  },
});
