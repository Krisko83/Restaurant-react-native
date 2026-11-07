import { NavigationContainer } from '@react-navigation/native'; 
import { StatusBar } from 'react-native';
import RootNavigator from './navigation/RootNavigator.jsx';
 

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}

