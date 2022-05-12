import * as Font from 'expo-font';
import React, {useState} from "react";


const useFonts = () => {
    const [isFontsLoaded, setIsFontsLoaded] = useState(false)

    Font.loadAsync({
        BebasNeue_400: require('../../assets/fonts/BebasNeue-Regular.ttf'),
        BebasNeue_700: require('../../assets/fonts/BebasNeue-Bold.ttf'),
        Manrope_400: require('../../assets/fonts/Manrope-Regular.ttf'),
        Manrope_600: require('../../assets/fonts/Manrope-SemiBold.ttf'),
        Manrope_700: require('../../assets/fonts/Manrope-Bold.ttf'),
    }).then(() => setIsFontsLoaded(true))

    return isFontsLoaded
}

export default useFonts