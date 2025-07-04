import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../account/LoginScreen';
import SignUpScreen from '../account/SignUpScreen';
import AppTabs from './AppBottomTabs';
import AddNewHorse from '../pages/horseProfile';
import Home from '../pages/home';


const Stack = createNativeStackNavigator();

export default function MainNavigation() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="NewHorse" component={AddNewHorse} />
            
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