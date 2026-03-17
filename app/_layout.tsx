import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Pasarela de Pago",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
