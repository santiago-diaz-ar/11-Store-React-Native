import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet } from "react-native";

export default function Logueo() {
  const navigation = useRouter();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const enviarFormulario = () => {
    navigation.push("home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logueate para ingresar </Text>
      <TextInput
        style={styles.input}
        value={correo}
        onChangeText={setCorreo}
        placeholder="Ingresa tu correo"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={contrasena}
        onChangeText={setContrasena}
        placeholder="Ingresa tu contraseña"
        secureTextEntry
      />
      <Button title="Enviar" onPress={enviarFormulario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 34,
    textAlign: "center",
  },
});
