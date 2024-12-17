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
      paddingBottom: 25
    },

    todoListContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      height: '80%'
    },

    inputPrintContainer: {
      flexDirection: 'row',
      gap: 16,
      backgroundColor: '#646464',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 9,
      paddingBottom: 9,
      borderRadius: 7,
      marginTop: 43
    },
    inputPrintButton: {
      backgroundColor: '#000',
      opacity: 0.88,
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 9,
      paddingBottom: 9,
      borderRadius: 30,
    },
    inputPrint: {
      width: '70%',
      color: '#fff',
      fontFamily: 'Poppins_500Medium',
      fontSize: 14,
    },

    clearButton: {
      color: '#fff',
      backgroundColor: '#000',
      width: '50%',
      paddingLeft: 54,
      paddingRight: 54,
      paddingTop: 8,
      paddingBottom: 8,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 200
    },
    taskInputContainer: {
      backgroundColor: '#646464',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      marginBottom: 25,
      flexDirection: 'row',
      gap: 15,
      width: '100%',
      alignItems: 'center',
    },
    taskInputContainerText: {
      fontSize: 14,
      fontFamily: 'Poppins_400Regular',
      color: '#fff',
      width: '60%'
    },
    clearButtonText: {
      color: '#fff',
      fontSize: 16,
      fontFamily: 'Poppins_500Medium',
      
    }
    
});

export default styles