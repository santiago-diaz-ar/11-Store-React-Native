import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const navigation = useRouter();
  return (
    <View>
      <Text>Ir a Home</Text>
      <Button title="Ir" onPress={() => navigation.push("home")} />
    </View>
  );
}
