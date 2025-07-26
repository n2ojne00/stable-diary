import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

export default function LoadingScreen() {

   
    return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="orange" />
          </View>
        );
}