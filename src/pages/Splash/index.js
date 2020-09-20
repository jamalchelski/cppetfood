import React, { useEffect } from 'react';
import { View, Text } from 'react-native';


const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 4000)
    })
    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    );
}
export default Splash;

// "useeffect" digunakn untuk memberikan time out perpindahan screen , dari screen Splash ke Screen Login
// "navigation.replace('Login')" digunakan untuk perpindahan antar halaman menggunakan stack navigator
// perlu penambahan client