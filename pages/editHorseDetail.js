import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { onSnapshot, query, collection, where, doc, updateDoc } from 'firebase/firestore';
import base from '../styles/base';
import { InputText } from '../components/txtInput';
import txtStyles from '../styles/text';
import ButtonStyles from '../styles/buttons';
import { SelectList } from 'react-native-dropdown-select-list';
import { CustomButton } from '../components/pressable';
import { Icons, ButtonIcons } from '../styles/icons';
import { useUser } from '../components/userInformation';
import { DB } from '../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/color';
import KeyboardScrollWrapper from '../components/scrollview';


export default function EditHorse() {

    const navigation = useNavigation();

    const { user } = useUser();
    const [horseList, setHorseList] = useState([]);
    const [selectedHorseId, setSelectedHorseId] = useState(null);
    const [selectedHorse, setSelectedHorse] = useState(null);
    const [loading, setLoading] = useState(true);

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [owner, setOwner] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [date, setDate] = useState(new Date());

    const isoDateOnly = date.toISOString().split('T')[0];

    const genderOptions = [
        { key: '1', value: 'Tamma' },
        { key: '2', value: 'Ruuna' },
        { key: '3', value: 'Ori' },
    ];

    // Fetch users horses from Firestore
    useEffect(() => {
        if (!user) return;

        const q = query(collection(DB, "horses"), where("userId", "==", user.uid));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const horses = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setHorseList(horses);
            setLoading(false);
        }, (error) => {
            console.error("Virhe haettaessa hevosia:", error);
            alert("Hevosten haku epäonnistui");
            setLoading(false);
        });

        return () => unsubscribe();
    }, [user]);

    //Selected horse details to editing form
    useEffect(() => {
        if (selectedHorseId) {
            const horse = horseList.find(h => h.id === selectedHorseId);
            if (horse) {
                setSelectedHorse(horse);
                setName(horse.name);
                setBreed(horse.breed);
                setOwner(horse.owner);
                setSelectedGender(horse.gender);
                setDate(new Date(horse.birthday));
            }
        }
    }, [selectedHorseId]);

    const handleDateChange = (event, selectedDate) => {
        if (selectedDate) setDate(selectedDate);
    };

    const showDatePicker = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange: handleDateChange,
            mode: 'date',
            is24Hour: true,
            maximumDate: new Date(),
            minimumDate: new Date(1970, 0, 1),
            firstDayOfWeek: 1,
        });
    };

    // Save edited horses details to Firestore
    const handleSave = async () => {
        if (!selectedHorseId || !name || !breed || !owner || !selectedGender) {
            alert('Täytä kaikki kentät!');
            return;
        }

        try {
            const horseRef = doc(DB, 'horses', selectedHorseId);
            await updateDoc(horseRef, {
                name,
                breed,
                owner,
                gender: selectedGender,
                birthday: isoDateOnly,
                updatedAt: new Date().toISOString(),
            });

            alert('Hevosen tiedot päivitetty!');
            navigation.goBack();
        } catch (error) {
            console.error('Virhe päivityksessä:', error);
            alert('Tietojen päivitys epäonnistui');
        }
    };

    if (loading) {
        return (
            <View style={[base.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <KeyboardScrollWrapper>
            <View style={[{ alignItems: 'center', justifyContent: 'center' }, base.container]}>
                <View>

                    <Text style={txtStyles.title}>Muokkaa hevosen tietoja</Text>
                    <SelectList
                        boxStyles={ButtonStyles.selectList}
                        inputStyles={txtStyles.body}
                        dropdownStyles={ButtonStyles.selectDropDown}
                        fontFamily='NotoSansDisplay_400Regular'
                        dropdownTextStyles={txtStyles.body}
                        arrowicon={Icons.arrowDown}
                        placeholder='Valitse hevonen'
                        search={false}
                        setSelected={setSelectedHorseId}
                        data={horseList.map(h => ({ key: h.id, value: h.name }))}
                        save="key"
                    />

                    {selectedHorse && (
                        <View style={{ marginTop: 20 }}>
                            <InputText
                                title={'Hevosen nimi'}
                                text={'text'}
                                placeholder={'Hevosen nimi'}
                                maxLength={50}
                                value={name}
                                onChangeText={setName}
                            />

                            <InputText
                                title={'Rotu'}
                                text={'text'}
                                placeholder={'Rotu'}
                                maxLength={50}
                                value={breed}
                                onChangeText={setBreed}
                            />

                            <SelectList
                                boxStyles={ButtonStyles.selectList}
                                inputStyles={txtStyles.body}
                                dropdownStyles={ButtonStyles.selectDropDown}
                                fontFamily='NotoSansDisplay_400Regular'
                                dropdownTextStyles={txtStyles.body}
                                arrowicon={Icons.arrowDown}
                                placeholder='Sukupuoli'
                                search={false}
                                setSelected={setSelectedGender}
                                data={genderOptions}
                                save="value"
                                defaultOption={{ key: selectedGender, value: selectedGender }}
                            />

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5 }}>
                                <CustomButton
                                    title="Syntymäpäivä"
                                    onPress={showDatePicker}
                                    size="small"
                                />

                                {Icons.calendar}

                                <Text style={txtStyles.subtitle}>{date.toLocaleDateString('fi-FI')}</Text>
                            </View>

                            <InputText
                                title={"Omistajan nimi"}
                                text={"text"}
                                placeholder={"Omistaja"}
                                maxLength={50}
                                value={owner}
                                onChangeText={setOwner}
                            />

                            <CustomButton
                                title="Tallenna muutokset"
                                onPress={handleSave}
                            />

                            <CustomButton
                                addIcon={ButtonIcons.ArrowLeft}
                                title={'Takaisin'}
                                onPress={() => navigation.goBack()}
                                reStyle={ButtonStyles.goBackBtn}
                            />

                        </View>
                    )}
                </View>
            </View>
        </KeyboardScrollWrapper>
    );
}
