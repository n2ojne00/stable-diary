import React, { useState } from 'react';
import { View, Text } from 'react-native';
import base from '../styles/base';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import ButtonStyles from '../styles/buttons';
import txtStyles from '../styles/text';
import { InputText, NoteInput } from '../components/txtInput';
import { CustomButton } from '../components/pressable';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { Icons } from '../styles/icons';

export default function AddNewTraining() {

  const [date, setDate] = useState(new Date());
 
  const [selectedHorse, setSelectedHorse] = React.useState("");
  const [selectedSport, setSelectedSport] = React.useState("");

  const showMode = (mode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: handleDateChange,
      mode,
      is24Hour: true,
    });
  };

  const showDatePicker = () => showMode('date');
  const showTimePicker = () => showMode('time');

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      console.log("valittu pvm ja kello " + selectedDate);
    }
  };

  const dataHorse = [
    { key: '1', name: 'My Big Pony' },
    { key: '2', name: 'My Medium Pony' },
    { key: '3', name: 'My Not So Small Pony' },
    { key: '4', name: 'My Giant Pony' },
  ];
  dataHorse.sort((a, b) => a.name.localeCompare(b.name));

  const dataSport = [
    { key: '1', value: 'Kouluratsastus' },
    { key: '2', value: 'Esteet' },
    { key: '3', value: 'Puomityöskentely' },
    { key: '4', value: 'Kenttäratsastus' },
    { key: '5', value: 'Maastakäsittely' },
    { key: '6', value: 'Monté' },
    { key: '7', value: 'Lännenratsastus' },
    { key: '8', value: 'Hölkkälenkki' },
    { key: '9', value: 'Vetoajo' },
    { key: '10', value: 'Raviurheilu' },
    { key: '11', value: 'Kävelytys' },

  ];
  //sorting data to alphabetical order
  dataSport.sort((a, b) => a.value.localeCompare(b.value));

  return ( 
    <View style={[{alignItems: 'center', justifyContent: 'center'}, base.container]}>
      <Text style={txtStyles.header}>Harjoitus</Text>
      <View>

        {// SET THE DATE
        }
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
          <View style={{ flexDirection: 'column', alignItems: 'center', }}>
             {Icons.calendar}
            <Text style={txtStyles.title}>
              {date.toLocaleDateString('fi-FI')}
            </Text>
            <CustomButton title="Päivämäärä" onPress={showDatePicker} size="small" />
          </View>

          {// SET THE TIME
          }
          <View style={{ flexDirection: 'column', alignItems: 'center', }}>
            {Icons.clock}
            <Text style={txtStyles.title}>
              {date.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' })}
            </Text>
            <CustomButton title="Kellonaika" onPress={showTimePicker} size="small" />
          </View>

        </View>

        {// CHOOSE HORSE/HORSES
        }
        <MultipleSelectList
          boxStyles={ButtonStyles.selectList}
          inputStyles={txtStyles.body}
          dropdownStyles={ButtonStyles.selectDropDown}
          checkBoxStyles={ButtonStyles.selectCheckBox}
          badgeStyles={ButtonStyles.selectBadge}
          fontFamily='NotoSansDisplay_400Regular'
          dropdownTextStyles={txtStyles.body}
          arrowicon={Icons.arrowDown}
          placeholder='Hevonen/Hevoset'
          label="Valitut hevoset"
          labelStyles={txtStyles.body}
          search={true}
          setSelected={(val) => setSelectedHorse(val)}
          data={dataHorse.map(({ key, name }) => ({ key, value: name }))}
          save="value"
        />

        {// TYPE OF TRAINING
        }
        <SelectList
          boxStyles={ButtonStyles.selectList}
          inputStyles={txtStyles.body}
          dropdownStyles={ButtonStyles.selectDropDown}
          fontFamily='NotoSansDisplay_400Regular'
          dropdownTextStyles={txtStyles.body}
          arrowicon={Icons.arrowDown}
          placeholder='Valitse vaihtoehto'
          search={false}
          setSelected={(val) => setSelectedSport(val)}
          data={dataSport}
          save="value"
        />
        {// EXERCISE DURATION IN MINUTES
        }
        <InputText title='Harjoituksen kesto minuutteina' placeholder='min' keytype='numeric' maxLength={3} />

        {// NOTES
        }
        <NoteInput title='Muistiinpanot' placeholder='...' keytype='default' />

        {// SAVE
        }
        <CustomButton title="Tallenna" onPress={() => { }} size="small"/>

      </View>
    </View>
  );
}