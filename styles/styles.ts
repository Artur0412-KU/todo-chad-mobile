import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3C3C3C',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Poppins_400Regular'
    },

    title: {
      fontSize: 32,
      color: '#fff',
      fontFamily: 'Poppins_700Bold',
      paddingBottom: 45
    },

    inputContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 15,
    },

    input: {
      height: 54,
      width: '80%',
      margin: 12,
      borderWidth: 3,
      borderColor: '#fff',
      borderRadius: 15,
      padding: 10,
      color: '#fff',
      fontFamily: 'Poppins_500Medium',
      paddingLeft: 30,
      marginBottom: 23,
    },

    buttonContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 317,
    },

    button: {
      width: '80%',
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 9,
      paddingBottom: 9,
      paddingLeft: 99,
      paddingRight: 99,
      borderRadius: 15,
      
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
      fontFamily: 'Poppins_500Medium',
    },
    buttonContainerText: {
      marginTop: 15,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 5
    },
    buttonTextButtom: {
      fontSize: 14,
      color: '#fff',
      fontFamily: 'Poppins_400Regular',
    },
    buttonTextButtomBold: {
      fontSize: 14,
      color: '#fff',
      fontFamily: 'Poppins_700Bold',
    },

    socialMediaContainer: {
      gap: 28,
      marginTop: 56,
    },
    gihubButton: {
      width: '80%',
      backgroundColor: '#000',
      paddingLeft: 25,
      paddingRight: 153,
      paddingTop: 9,
      paddingBottom: 9,
      borderRadius: 15,
      flexDirection: 'row',
      gap: 10
    },
    linkedInButton: {
      width: '80%',
      backgroundColor: '#0090FF',
      paddingLeft: 25,
      paddingRight: 141,
      paddingTop: 9,
      paddingBottom: 9,
      borderRadius: 15,
      flexDirection: 'row',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      gap: 10
    },
    gihubButtonText: {
      fontSize: 16,
      color: '#fff',
      fontFamily: 'Poppins_400Regular',
    },

    signOutButton: {
      width: '70%',
      backgroundColor: '#000',
      paddingLeft: 35,
      paddingRight: 35,
      paddingTop: 9,
      paddingBottom: 9,
      borderRadius: 15,
      marginTop: 140,
      fontFamily: 'Poppins_500Medium',
      color: '#fff',
      textAlign: 'center'
    }, 
    
    signOutButtonText: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'Poppins_500Medium'
    },

    todoHeader: {
      alignItems: 'flex-start',
      paddingRight: 50,
    },

    todoHeaderTitle: {
      fontSize: 28,
      fontFamily: 'Poppins_700Bold',
      color: '#fff',
      textAlign: 'left',
    },

    todoHeaderSubtile: {
      fontSize: 16,
      color: '#fff',
      fontFamily: 'Poppins_400Regular',
      paddingTop: 15,
    }
});

export default styles