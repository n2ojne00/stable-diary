import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './AppDrawer';
import Home from '../pages/home';
import LoginScreen from '../account/LoginScreen';
import SignUpScreen from '../account/SignUpScreen';
import AppTabs from './AppBottomTabs';


const Stack = createNativeStackNavigator();

export default function MainNavigation() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={AppTabs} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            
        </Stack.Navigator>
    );
}

/**
 *   <Stack.Navigator screenOptions={{ headerShown: false, }}
        >
            <Stack.Screen
                name="DrawerNavigation" component={DrawerNavigator}
            />
            <Stack.Screen
                name="Login" component={LoginScreen}
            />
            <Stack.Screen
                name="SignUp" component={SignUpScreen}
            />
            <Stack.Screen
                name="Home" component={Home}
            />
            <Stack.Screen name="MainTabs" component={AppTabs} />
            

        </Stack.Navigator>
 */