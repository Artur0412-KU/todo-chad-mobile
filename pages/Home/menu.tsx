import React from 'react'
import { Image, Pressable, Text, View, Linking } from 'react-native'
import styles from '../../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { firebase_auth } from '../../FirebaseConfig';

export default function Menu({navigation}: any) {
    const handleGithubClick = () => {
        Haptics.selectionAsync()
        Linking.openURL('https://github.com/Artur0412-KU')
    }
    const handleLinkedInClick = () => {
        Haptics.selectionAsync()
        Linking.openURL('https://www.linkedin.com/in/artur-kudyrko-639bb1239/')
    }
  return (
    <SafeAreaView style = {styles.container}>
        <Image source={{uri: 'https://i.pinimg.com/736x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg'}}
        style = {{width: 270, height: 240, borderRadius: 30}}/>
        <View style = {styles.socialMediaContainer}>
            <Pressable style = {styles.gihubButton} onPress={() => handleGithubClick()}>
                <FontAwesome name="github" size={24} color="white" />
                <Text style = {styles.gihubButtonText}>GitHub</Text>
            </Pressable>
            <Pressable style = {styles.linkedInButton} onPress={() => handleLinkedInClick()}>
                <FontAwesome name="linkedin" size={24} color="white" />
                <Text style = {styles.gihubButtonText}>LinkedIn</Text>
            </Pressable>
        </View>
        <Pressable style = {styles.signOutButton} onPress={() => firebase_auth.signOut()}>
            <Text style = {styles.signOutButtonText}>Sign out</Text>
        </Pressable>
    </SafeAreaView>
  )
}
