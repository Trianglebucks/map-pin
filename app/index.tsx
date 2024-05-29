import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";

const HomePage = () => {
  return (
    <View>
      <Text>Hello</Text>
      <Pressable onPress={() => router.navigate("orders/order")}>
        <Text>hello</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;
