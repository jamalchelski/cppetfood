import React from 'react';
import { View } from 'react-native';
import { Button } from '../Components';


const ActionButton = ({ title }) => {
    return (
        <View style={styles.wrapper.component}>
            <Button title={title} />
        </View>
    );
};
const styles = {
    wrapper: {
        component: { maxWidth: 225 },
    },
}
export default ActionButton;