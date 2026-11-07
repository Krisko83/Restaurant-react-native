import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InfoScreen from "../screens/InfoScreen.jsx";
import HomeNavigator from "./HomeNavigator.jsx";
import CartNavigator from "./CartNavigator.jsx";
import { Ionicons } from "@expo/vector-icons";
// import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();

    // const Tabs = createNativeBottomTabNavigator();
    return (
        <Tabs.Navigator>

            <Tabs.Screen
                name='HomeTab'
                component={HomeNavigator}
                options={{
                    title: 'Menu',
                    headerShown: false,
                    tabBarIcon: (({ color, size }) => <Ionicons name='restaurant' color={color} size={size} />)
                }}
            />
            <Tabs.Screen
                name='CartTab'
                component={CartNavigator}
                options={{
                    title: 'Cart',
                    headerShown: false,
                    tabBarIcon: (({ color, size }) => <Ionicons name='cart' color={color} size={size} />)
                }}
            />
            <Tabs.Screen
                name='Info'
                component={InfoScreen}
                options={{
                    tabBarIcon: (({ color, size }) => <Ionicons name="help-circle-outline" color={color} size={size} />)
                }}
            />
        </Tabs.Navigator>
    );
}