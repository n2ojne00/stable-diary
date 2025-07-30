import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, TextInput, View } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import base from '../styles/base';
import txtStyles from '../styles/text';
import { CustomButton } from '../components/pressable';
import { ButtonIcons } from '../styles/icons';
import { SettingsAccordionItem } from '../components/openSettingsAccordion';

export default function Settings() {

    const navigation = useNavigation();

    const [isOn, setIsOn] = useState(false);

    return (

        <View style={base.container}>
            <Text style={txtStyles.title}>Asetukset</Text>

            <ToggleSwitch
                isOn={isOn}
                onColor="#329F5B"
                offColor="#CE8147"
                label="Tämä on asetus"
                labelStyle={txtStyles.subtitle}
                onToggle={setIsOn}
                style={base.toggleBg}
            />

            <SettingsAccordionItem
                title="Tallin hallinnointi"
                buttons={[
                    { id: '1', addIcon: ButtonIcons.Add, title: 'Lisää hevonen', onPress: () => navigation.navigate('NewHorse') },
                    { id: '2', title: 'Muuta hevosen tietoja', onPress: () => console.log('Hevosen tietojen muutos') },
                    { id: '3', addIcon: ButtonIcons.Trash, title: 'Poista hevosia', onPress: () => console.log('Poista') },
                ]}
            />

            <SettingsAccordionItem
                title="Käyttäjätili"
                buttons={[
                    { id: '4', title: 'Vaihda sähköposti', onPress: () => console.log('Vaihda sähköposti') },
                    { id: '5', addIcon: ButtonIcons.Trash, title: 'Poista tili', onPress: () => console.log('Poista tili') }, // Add alert to confirm deletion
                ]}
            />

            <CustomButton addIcon={ButtonIcons.ArrowLeft} title={'Takaisin'} onPress={() => navigation.navigate('UserProfile')} />


        </View>

    );
}