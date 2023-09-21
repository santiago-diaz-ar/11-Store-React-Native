import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="inicio" />
      <Tabs.Screen name="videos" />
      <Tabs.Screen name="usuario" />
    </Tabs>
  );
};
