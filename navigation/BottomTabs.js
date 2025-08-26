import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from '../styles/color';
import MyStable from '../pages/stableView';
import { TabIcons } from '../styles/icons';
import { HomeStack, ProfileStack, StableStack } from './SideNavigation';
import AddNewTraining from '../pages/NewTraining';
import History from '../pages/History';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {

          backgroundColor: colors.background,
          borderColor: colors.lightBrown,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: colors.greenyDark,
        tabBarInactiveTintColor: colors.lightBrown,
        tabBarIcon: ({ color, size, focused }) => (
          <View>
            {TabIcons[route.name]?.(color, 30)}
            {focused && <View style={{ height: 3, backgroundColor: colors.darkBrown, marginTop: 2, borderRadius: 5 }} />}
          </View>
        )
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="New Training" component={AddNewTraining} />
      <Tab.Screen name="Stable"
        component={StableStack}
        listeners={({ navigation }) => ({
          tabPress: e => {
            navigation.navigate('Stable', { screen: 'MyStable' });
          },
        })}
      />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        listeners={({ navigation }) => ({
          tabPress: e => {
            navigation.navigate('Profile', { screen: 'UserProfile' });
          },
        })}
      />

    </Tab.Navigator>
  );
}
