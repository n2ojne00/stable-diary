import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DrawerNavigator from './AppDrawer';
import Home from '../pages/home';
import LoginScreen from '../account/LoginScreen';
import SignUpScreen from '../account/SignUpScreen';
import AppHeader from './AppHeader';
import colors from '../styles/color';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {

    return (

        <Stack.Navigator screenOptions={{headerShown: false,}}
        >
            <Stack.Screen
                name="DrawerNavigation"
                component={DrawerNavigator}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Login" component={LoginScreen}
            />
            <Stack.Screen
                name="SignUp" component={SignUpScreen}
            />
 

        </Stack.Navigator>

    );
}
