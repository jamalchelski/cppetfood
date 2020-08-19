import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ActionButton from '../Login/ActionButton';
import { Colors } from '../../utils/colors';
import { Ti } from '../Components';


const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 94, backgroundColor: 'purple' }}>
                <Text>
                    logo
                </Text>
                <Text>
                    CP PETFOOD
                </Text>
            </View>
            <View style={{ backgroundColor: 'pink', height: 94, marginTop: 7, marginBottom: 10 }}>
                <View>
                    <Text>
                        plat nomor mobil
                    </Text>
                </View>
                <View>
                    <Text>
                        tujuan loading
                    </Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Roboto', fontSize: 15, fontWeight: 'bold', fontStyle: 'normal', color: Colors.border }}>PENDAFTARAN ANTRIAN</Text>
                <Ti PL='Plat Mobil' />
                <Ti PL='Nomor Faktur' />
                <Ti PL='Tujuan' />
                <Ti PL='Nama Driver' />
            </View>
            <View style={{ marginTop: 50, alignItems: 'center' }}>
                <ActionButton title='Simpan' />
            </View>
        </View>
    );
}
export default Home;