import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/CartScreen.jsx";
import InfoScreen from "../screens/InfoScreen.jsx";
import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import HomeNavigator from "./HomeNavigator.jsx";
import CartNavigator from "./CartNavigator.jsx";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();

    // const Tabs = createNativeBottomTabNavigator();
    return (
        <Tabs.Navigator>

            <Tabs.Screen name='HomeTab' component={HomeNavigator} options={{ title: 'Menu', headerShown: false }} />
            <Tabs.Screen name='CartTab' component={CartNavigator} options={{ title: 'Cart', headerShown: false }}/>
            <Tabs.Screen name='Info' component={InfoScreen} />
        </Tabs.Navigator>
    );
}