import React from 'react';
import { View, Text, Image } from 'react-native';
import ActionButton from './ActionButton';
import { Colors } from '../../utils/colors';
import { logo } from '../assets';


const Login = () => {
    return (
        <View style={styles.wrapper.page}>
            <View style={styles.wrapper.logo}>
                <Image source={logo} style={styles.wrapper.logo} />
            </View>
            <Text style={styles.text.text_desc}>Masukan NIP dan Password anda</Text>
            <Text style={{ marginBottom: 23 }}>NIP</Text>
            <Text style={{ marginBottom: 59 }}>Passord</Text>
            <ActionButton title="login" />
        </View>
    );
};

const styles = {
    wrapper: {
        page: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: Colors.background },
        logo: {
            width: 107, height: 107,
            marginBottom: 57
        },
    },
    text: {
        text_desc: {
            fontSize: 14, fontFamily: 'Roboto',
            fontWeight: 'normal', fontStyle: 'italic', color: Colors.border, marginBottom: 46
        },
    }
}


export default Login;