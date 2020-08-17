import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../../../utils/colors';

const Button = ({ title }) => {
    return (
        <TouchableOpacity style={styles.wrapper.button}>
            <Text style={styles.text.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    wrapper: {
        component: { maxWidth: 225 },
        button: {
            width: 198, backgroundColor: Colors.second, borderWidth: 2,
            borderRadius: 20, borderColor: '#8A6D18', paddingVertical: 6
        }
    },
    text: {
        title: {
            fontStyle: 'normal', fontWeight: 'bold',
            fontFamily: 'Roboto', fontSize: 13, color: 'white',
            textAlign: 'center', textTransform: 'uppercase'
        }
    }
}

export default Button;