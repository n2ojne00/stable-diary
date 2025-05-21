import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TestStyles from '../pages/style-test';
import Home from '../pages/home';



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
    </Tab.Navigator>
  );
}
