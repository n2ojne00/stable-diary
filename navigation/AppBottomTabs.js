import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import colors from '../styles/color';
import Home from '../pages/home';
import MyStable from '../pages/stableView';
import TestStyles from '../pages/style-test';
import AddNewTraining from '../pages/newTraining';
import History from '../pages/history';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.darkBrown,
        tabBarInactiveTintColor: colors.lightBrown,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Stable':
              iconName = 'trail-sign-outline';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            case 'New Training':
              iconName = 'fitness';
              break;
            case 'History':
              iconName = 'time';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Stable" component={MyStable} />
      <Tab.Screen name="New Training" component={AddNewTraining} />
      <Tab.Screen name="History" component={History} /> 
      <Tab.Screen name="Profile" component={TestStyles} />
    </Tab.Navigator>
  );
}
