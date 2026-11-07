import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../screens/CartScreen.jsx";

export default function CartNavigator() {
        const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={CartScreen}/>
        </Stack.Navigator>
    );
}