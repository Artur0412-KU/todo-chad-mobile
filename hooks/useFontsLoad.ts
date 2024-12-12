import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";


export default function useFontsLoad() {
    const [fontsLoad] = useFonts({
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_700Bold
    })

    return fontsLoad;
}
