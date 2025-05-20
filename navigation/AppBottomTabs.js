import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TestStyles from '../pages/style-test';
import Home from '../pages/Home';
import HorseProfile from '../pages/horseprofile';


const Tab = createBottomTabNavigator();

export default function AppBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="ProfileTab" component={TestStyles} />
      <Tab.Screen name="HorseTab" component={HorseProfile} />
    </Tab.Navigator>
  );
}
