import { createDrawerNavigator } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TestStyles from '../pages/style-test';
import colors from '../styles/color';
import AppHeader from './AppHeader';
import AddNewTraining from '../pages/newTraining';
import Home from '../pages/home';
import MyStable from '../pages/stableView';
import History from '../pages/history';
import AppTabs from './BottomTabs';



const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (

        <Drawer.Navigator
            screenOptions={({ navigation, route, options }) => ({
                header: (props) => <AppHeader {...props} />,
                headerShown: true,
                drawerStyle: {
                    backgroundColor: colors.drawerBg,
                    width: wp('80%'),
                },
                drawerActiveTintColor: colors.darkBrown,
                drawerInactiveTintColor: colors.lightBrown,
                drawerLabelStyle: {
                    fontSize: hp('2%'),
                    fontFamily: 'NotoSansDisplay_400Regular',
                },
            })}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Stable" component={MyStable} />
            <Drawer.Screen name="Profile" component={TestStyles} />
            <Drawer.Screen name="New Training" component={AddNewTraining} />
            <Drawer.Screen name="History" component={History} />
            <Drawer.Screen name="Main" component={AppTabs} />
        </Drawer.Navigator>

    );
}