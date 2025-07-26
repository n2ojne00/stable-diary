import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from 'firebase/firestore';

import base from '../styles/base';
import { InputText } from '../components/txtInput';
import ButtonStyles from '../styles/buttons';
import txtStyles from '../styles/text';
import { ButtonIcons, Icons } from '../styles/icons';
import { SelectList } from 'react-native-dropdown-select-list';
import { CustomButton } from '../components/pressable';
import { DB } from '../FirebaseConfig';
import { useUser } from '../components/userInformation';


export default function AddNewHorse() {

  const navigation = useNavigation();

  const { user } = useUser();


  const [date, setDate] = useState(new Date());
  const isoDateOnly = date.toISOString().split('T')[0];
  const [selectedGender, setSelectedGender] = useState("");
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [owner, setOwner] = useState('');

  // Adds new horse to Firestore and checks if all (necessary) fields are filled
  const handleAddHorse = async () => {
    if (!name || !breed || !selectedGender || !owner) {
      alert("Täytä kaikki kentät!");
      return;
    }

    try {
      const newHorse = {
        name,
        breed,
        gender: selectedGender,
        birthday: isoDateOnly,
        owner,
        createdAt: new Date().toISOString(),
        userId: user.uid,
      };

      await addDoc(collection(DB, "horses"), newHorse);

      alert("Hevonen lisätty!");
      navigation.goBack(); //its profile
      console.log("Hevonen lisätty:", newHorse);
    } catch (error) {
      console.error("Error adding horse:", error);
      alert("Virhe tallennuksessa!");
    }
  };

  // Gender options for the horse.. Add to firestore?
  const gender = [
    { key: '1', value: 'Tamma' },
    { key: '2', value: 'Ruuna' },
    { key: '3', value: 'Ori' },

  ];

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      //console.log("valittu syntymäpäivä " + selectedDate);
    }
  };

  // BIRTHDAY DATE PICKER  
  const showMode = (mode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: handleDateChange,
      mode,
      is24Hour: true,
      maximumDate: new Date(),
      minimumDate: new Date(1970, 0, 1), // Prevent selecting dates before 1970
      firstDayOfWeek: 1,

    });
  };
  const showDatePicker = () => showMode('date');



  return (
    <View style={[{ alignItems: 'center', justifyContent: 'center' }, base.container]}>
      <View>
        <Text style={txtStyles.title}>Lisää hevonen</Text>
        {// NAME AND BREED
        }
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
        {//CHOOSE GENDER
        }
        <SelectList
          boxStyles={ButtonStyles.selectList}
          inputStyles={txtStyles.body}
          dropdownStyles={ButtonStyles.selectDropDown}
          fontFamily='NotoSansDisplay_400Regular'
          dropdownTextStyles={txtStyles.body}
          arrowicon={Icons.arrowDown}
          placeholder='Valitse sukupuoli'
          search={false}
          setSelected={(val) => setSelectedGender(val)}
          data={gender}
          save="value"
        />

        {// ADD BIRTHDAY
        }
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5 }}>

          <CustomButton title="Syntymäpäivä" onPress={showDatePicker} size="small" />

          {Icons.calendar}
          <Text style={txtStyles.subtitle}>
            {date.toLocaleDateString('fi-FI')}
          </Text>

        </View>

        {// OWNER NAME
        }
        <InputText
          title={'Omistajan nimi'}
          text={'text'}
          placeholder={'Omistajan nimi'}
          maxLength={50}
          value={owner}
          onChangeText={setOwner}
        />

        <CustomButton title="Lisää talliin" onPress={handleAddHorse} size="small" />

        <CustomButton addIcon={ButtonIcons.ArrowLeft} title={'Takaisin'} onPress={() => navigation.navigate('UserProfile')} />

      </View>
    </View>
  );
}
