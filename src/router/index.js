import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Home, List, Login } from '../pages';


const Stack = createStackNavigator();


const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="List" component={List} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    );
}

export default Router;