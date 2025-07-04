import React, { useState } from 'react';
import { View, Text } from 'react-native';
import base from '../styles/base';
import { InputText } from '../components/txtInput';
import ButtonStyles from '../styles/buttons';
import txtStyles from '../styles/text';
import { Icons } from '../styles/icons';
import { SelectList } from 'react-native-dropdown-select-list';
import { CustomButton } from '../components/pressable';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function AddNewHorse() {

  const [date, setDate] = useState(new Date());
  const [selectedGender, setSelectedGender] = useState("");

  const gender = [
    { key: '1', value: 'Tamma' },
    { key: '2', value: 'Ruuna' },
    { key: '3', value: 'Ori' },

  ];

    const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      console.log("valittu syntymäpäivä " + selectedDate);
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
      minimumDate: new Date(1970, 0, 1),
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
        />
        <InputText
          title={'Rotu'}
          text={'text'}
          placeholder={'Rotu'}
          maxLength={50}

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
        />

        <CustomButton title="Lisää talliin" onPress={() => { }} size="small"/>

      </View>
    </View>
  );
}
