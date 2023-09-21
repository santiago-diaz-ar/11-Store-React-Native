import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack name="inicio" />
      <Stack name="videos" />
    </Stack>
  );
};

export default StackLayout;
