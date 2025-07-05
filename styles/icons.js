import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Ionicons } from '@expo/vector-icons';
import colors from './color';

export const Icons = {
  seeMore: <MaterialIcons name="more-horiz" size={30} color={colors.txtSubtitle} />,
  clock: <MaterialCommunityIcons name="clock-outline" size={30} color={colors.lightBrown} />,
  calendar: <MaterialCommunityIcons name="calendar" size={30} color={colors.lightBrown} />,
  arrowDown: <AntDesign name="caretdown" size={18} color={colors.carrot} />,
  horseHead: <MaterialCommunityIcons name="horse-variant" size={90} color={colors.lightBrown} />,
  barn: <MaterialCommunityIcons name="barn" size={100} color={colors.lightBrown} />,
  plus: <Entypo name="plus" size={25} color={colors.lightBrown} />,
  minus: <Entypo name="minus" size={25} color={colors.lightBrown} />,
}; 

export const TabIcons = {
  Home: (color, size) => <Ionicons name="home" size={size} color={color} />,
  Stable: (color, size) => <Ionicons name="trail-sign-outline" size={size} color={color} />,
  Profile: (color, size) => <Ionicons name="person" size={size} color={color} />,
  'New Training': (color, size) => <Ionicons name="fitness" size={size} color={color} />,
  History: (color, size) => <Ionicons name="time" size={size} color={color} />,
};

export const ButtonIcons = {
  Add: <MaterialCommunityIcons name="plus" size={25} color={colors.txtWhite} />,
  Settings: <Ionicons name="settings-outline" size={25} color={colors.txtWhite} />,
  Logout: <Ionicons name="log-out-outline" size={25} color={colors.txtWhite} />,
  ArrowLeft: <Ionicons name="arrow-back" size={25} color={colors.txtWhite} />,
  ArrowRight: <Ionicons name="arrow-forward" size={25} color={colors.txtWhite} />,
};