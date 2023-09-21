import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const New = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (name, value) => {
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
    } else {
      setErrorMessage("");
      // Aquí puedes manejar el envío del formulario
    }
  };

  return (
    <View style={styles.container}>
      <Text>Crea un nuevo Usuario</Text>
      <TextInput
        style={styles.input}
        value={form.username}
        onChangeText={(value) => handleChange("username", value)}
        placeholder="Nuevo nombre de usuario"
      />
      <TextInput
        style={styles.input}
        value={form.email}
        onChangeText={(value) => handleChange("email", value)}
        placeholder="Nuevo correo electrónico"
      />
      <TextInput
        style={styles.input}
        value={form.password}
        onChangeText={(value) => handleChange("password", value)}
        placeholder="Nueva contraseña"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={form.confirmPassword}
        onChangeText={(value) => handleChange("confirmPassword", value)}
        placeholder="Repite la contraseña"
        secureTextEntry
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

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
    marginBottom: 10,
    paddingLeft: 8,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default New;
