import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const Inicio = () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);

  const productosApi = async () => {
    setLoading(true);
    try {
      const getLlamado = await axios.get(apiUrl);
      const result = getLlamado.data;

      if (result) {
        setDatos(result);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    productosApi();
  }, []);

  return (
    <View style={styles.containetOne}>
      <Text style={styles.titleProducts}>Productos</Text>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={datos}
          renderItem={({ item }) => (
            <View style={styles.cajas}>
              <Text style={styles.title}>{item.name}</Text>

              <View style={styles.containerimgen}>
                <Image
                  style={styles.imgen}
                  source={{ uri: item.image }}
                  resizeMode="stretch"
                />
              </View>
              <Text>Añadir a Compras</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerimgen: {
    width: "100%",
    height: "75%",
  },
  imgen: {
    borderWidth: 3,
    borderColor: "",
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  titleProducts: {
    padding: 1,
    marginTop: 5,
  },
  title: {
    height: "100%",
  },
  containetOne: {
    height: "100%",
    alignItems: "center",
  },
  cajas: {
    margin: 10,
    backgroundColor: "deeppink",
    color: "white",
    fontSize: 10,
    padding: 10,
    width: 250,
    height: 280,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
  },
});
export default Inicio;
