import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack name="inicio" />
      <Stack name="new" />
    </Stack>
  );
};

export default StackLayout;
