import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigator from "./TabsNavigator.jsx";
import DetailsScreen from "../screens/DetailsScreen.jsx";
import CartScreen from "../screens/CartScreen.jsx";

export default function RootNavigator() {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>

            <Stack.Screen name='MainSatck' component={TabsNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name='MainCart' component={CartScreen} options={{ title: 'Cart' }} />
            
        </Stack.Navigator>
    );
}