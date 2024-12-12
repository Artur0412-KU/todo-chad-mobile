import React from 'react'
import useFontsLoad from '../../hooks/useFontsLoad';
import { ActivityIndicator, Button, StatusBar, Text, View } from 'react-native';
import styles from '../../styles/styles';

export default function SignIn({navigation}: any) {
    const fontsLoad = useFontsLoad()

    if(!fontsLoad) {
      return <View>
        <ActivityIndicator size='large' color='#fff'/>
      </View>
    } else {
      return (
        <View style={styles.container}>
         <Text style = {{fontFamily: 'Poppins_400Regular', color: '#fff'}}>Open up App.tsx to start working on your app!</Text>
         <Button title='Click' onPress={() => navigation.navigate('signup')}/>
        </View>
      );
    }
}

