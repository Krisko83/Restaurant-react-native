import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen.jsx";

export default function HomeNavigator() {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Menu'}}/>
        </Stack.Navigator>
    );
}