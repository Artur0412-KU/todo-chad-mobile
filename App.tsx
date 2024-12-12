import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import useFontsLoad from './hooks/useFontsLoad';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createNativeStackNavigator()

export default function App() {
  const fontsLoad = useFontsLoad()

  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} screenOptions={{headerShown: false}}>
           <Stack.Screen name='signin' component={SignIn}/>
           <Stack.Screen name='signup' component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C3C3C',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins_400Regular'
  },
});
