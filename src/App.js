import { NavigationContainer } from '@react-navigation/native'; 
import { StatusBar } from 'react-native';
import RootNavigator from './navigation/RootNavigator.jsx';
import CartProvider from './contexts/cart-context/CartProvider.jsx';
 

export default function App() {
  return (
    <CartProvider>
      <StatusBar barStyle='auto' />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}



// https://jekwxfohagnknpkqdgdo.supabase.co/rest/v1/categories

// https://jekwxfohagnknpkqdgdo.supabase.co/rest/v1/meals