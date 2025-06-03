import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DrawerNavigator from './AppDrawer';
import Home from '../pages/home';
import LoginScreen from '../account/LoginScreen';
import SignUpScreen from '../account/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigation(navigation) {

    return (

        <Stack.Navigator screenOptions={{headerShown: false,}} component={DrawerNavigator}
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
