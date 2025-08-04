import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import base from '../styles/base';
import txtStyles from '../styles/text';
import { CustomButton } from '../components/pressable';
import { ButtonIcons } from '../styles/icons';
import { SettingsAccordionItem } from '../components/openSettingsAccordion';
import ButtonStyles from '../styles/buttons';

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
                key="StableManagement"
                title="Tallin hallinnointi"
                buttons={[
                    { id: 1, addIcon: ButtonIcons.Add, title: 'Lisää hevonen', onPress: () => navigation.navigate('NewHorse') },
                    { id: 2, title: 'Muuta hevosen tietoja', onPress: () => navigation.navigate('EditHorse') },
                    { id: 3, addIcon: ButtonIcons.Trash, title: 'Poista hevosia', onPress: () => navigation.navigate('RemoveHorse') },
                ]}
            />

            <SettingsAccordionItem
                key="UserManagement"
                title="Käyttäjätili"
                buttons={[
                    { id: 4, title: 'Vaihda sähköposti', onPress: () => navigation.navigate('UpdateEmail') },
                    { id: 5, addIcon: ButtonIcons.Trash, title: 'Poista tili', onPress: () => navigation.navigate('DeleteUser'), reStyle: ButtonStyles.deleteBtn }, // Add alert to confirm deletion
                ]}
            />

            <CustomButton
                addIcon={ButtonIcons.ArrowLeft}
                title={'Takaisin'}
                onPress={() => navigation.navigate('UserProfile')}
                reStyle={ButtonStyles.goBackBtn}
            />


        </View>

    );
}