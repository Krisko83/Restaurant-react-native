import { NavigationContainer } from '@react-navigation/native'; 
import { StatusBar, Text } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Text>Open up App.js to start working on your app!</Text>
      </NavigationContainer>
    </>
  );
}

