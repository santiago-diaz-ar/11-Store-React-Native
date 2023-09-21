import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const navigation = useRouter();
  return (
    <View>
      <Text>Ir a Home</Text>
      <Button title="Atras" onPress={() => navigation.replace("/")} />
    </View>
  );
}
