import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen.jsx";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import CategoryScreen from "../screens/CategoryScreen.jsx";
import DetailsScreen from "../screens/DetailsScreen.jsx";

export default function HomeNavigator({ navigation }) {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerRight: () =>
                <Pressable onPress={() => navigation.navigate('MainCart')}>
                    <Ionicons name='cart' color='black' size={24} style={{ marginRight: 16 }} />
                </Pressable>
        }}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'Menu'
                }}
            />

            <Stack.Screen 
                name="Category" component={CategoryScreen}
            /> 
        </Stack.Navigator>
    );
}