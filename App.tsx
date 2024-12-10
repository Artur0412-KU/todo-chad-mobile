import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import useFontsLoad from './hooks/useFontsLoad';


export default function App() {
  const fontsLoad = useFontsLoad()

  if(!fontsLoad) {
    return <View>
      <ActivityIndicator size='large' color='#fff'/>
    </View>
  } else {
    return (
      <View style={styles.container}>
       <Text style = {{fontFamily: 'Poppins_400Regular', color: '#fff'}}>Open up App.tsx to start working on your app!</Text>
       <StatusBar style="auto" />
      </View>
    );
  }
  
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
