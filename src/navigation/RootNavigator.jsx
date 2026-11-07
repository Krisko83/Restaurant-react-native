import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen.jsx";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator>
            <Tabs.Screen name='Home' component={HomeScreen}/>

        </Tabs.Navigator>
    );
}