import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './AppDrawer';
import Home from '../pages/home';
import LoginScreen from '../account/LoginScreen';
import SignUpScreen from '../account/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigation(navigation) {

    return (

        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false, }}
        >
            <Stack.Screen
                name="Login" component={LoginScreen}
            />
            <Stack.Screen
                name="SignUp" component={SignUpScreen}
            />
            <Stack.Screen
                name="DrawerNavigation"
                component={DrawerNavigator}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />




        </Stack.Navigator>

    );
}
