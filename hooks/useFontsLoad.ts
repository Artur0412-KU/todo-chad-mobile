import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";


export default function useFontsLoad() {
    const [fontsLoad] = useFonts({
      Poppins_400Regular,
    })

    return fontsLoad;
}
