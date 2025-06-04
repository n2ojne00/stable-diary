import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../styles/color';
import { IconButton } from '../components/pressable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function AppHeader({ navigation }) {
    return (
        <View
            style={{
                paddingTop: hp('4%'),
                paddingLeft: wp('2%'),
                height: hp('10%'),
                position: 'absolute',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ padding: 4 }}>
                <Ionicons name="menu" size={35} color={colors.lightBrown} />
            </TouchableOpacity>

            <View style={{ padding: 4 }}>
                <IconButton
                    iconName="arrowleft"
                    onPress={() => navigation.canGoBack() && navigation.goBack()}
                    size={25}
                    color={colors.darkBrown}
                />
            </View>
            
        </View>
    );
}



