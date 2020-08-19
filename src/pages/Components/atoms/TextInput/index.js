import React from 'react';
import { View, TextInput } from 'react-native';
import { Colors } from '../../../../utils/colors';

const Ti = ({ PL }) => {
    return (
        <View>
            <TextInput placeholder={PL} style={{
                borderBottomColor: Colors.border, borderBottomWidth: 2,
                width: 230, fontStyle: 'italic', fontSize: 13, marginTop: 8
            }}>
            </TextInput>
        </View>
    );
};



export default Ti;