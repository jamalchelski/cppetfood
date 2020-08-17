import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Home, List, Login } from '../pages';


const Stack = createStackNavigator();


const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
    );
}

export default Router;