import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";

const Inicio = () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);

  const productosApi = async () => {
    setLoading(true);
    try {
      const getLlamado = await axios.get(
        "https://back-end-paola.onrender.com/products"
      );
      const result = getLlamado?.data;

      if (result) {
        setDatos(result);
        setLoading(false);
      }
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    productosApi();
  }, []);

  return (
    <View style={styles.containetOne}>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={datos}
          renderItem={({ item }) => (
            <ScrollView>
              <View style={styles.cajas}>
                <Text style={styles.title}>{item.name}</Text>

                <View style={styles.containerimgen}>
                  <Image
                    style={styles.imgen}
                    source={item.image}
                    resizeMode="stretch"
                  />
                </View>
              </View>
            </ScrollView>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerimgen: {
    width: "100%",
    height: "90%",
  },
  imgen: {
    borderWidth: 3,
    borderColor: "",
    width: "100%",
    height: "100%",
    borderRadius: 5,
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
    height: 230,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
export default Inicio;
