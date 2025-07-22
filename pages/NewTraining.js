import React, { useState } from 'react';
import { View, Text } from 'react-native';
import base from '../styles/base';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import ButtonStyles from '../styles/buttons';
import txtStyles from '../styles/text';
import FakeHorseData from '../exampleData/horseData.json';
import { InputText, NoteInput } from '../components/txtInput';
import { CustomButton } from '../components/pressable';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { Icons } from '../styles/icons';
import { TrainingHistoryList } from '../components/flatlist';

export default function AddNewTraining() {

  const [savedTraining, setSavedTraining] = useState([]);
  //console.log("Tallennetut harjoitukset: ", savedTraining);

  const [date, setDate] = useState(new Date());
  const [selectedHorse, setSelectedHorse] = useState([]);
  const [selectedSport, setSelectedSport] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");


  const showMode = (mode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: handleDateChange,
      mode,
      is24Hour: true,
      firstDayOfWeek: 1,
    });
  };

  const showDatePicker = () => showMode('date');
  const showTimePicker = () => showMode('time');

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      //console.log("valittu pvm ja kello " + selectedDate);
    }
  };

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

  // Function for checking inputs before saving
 const acceptSaving = () => {
  if (selectedHorse.length === 0) {
    alert("Valitse vähintään yksi hevonen.");
    return false;
  }

  if (!selectedSport) {
    alert("Valitse laji.");
    return false;
  }

  if (!duration) {
    alert("Syötä harjoituksen kesto.");
    return false;
  }

  alert("Tallennus onnistui.");
  return true;
};


  const saveTraining = () => {
    
    const canSave = acceptSaving();
    
    if (canSave) {
    const trainingData = {
      id: savedTraining.length + 1, // Id generation based on current length 
      date: date,
      horse: selectedHorse,
      sport: selectedSport,
      duration: duration,
      notes: notes,
      saveDate: new Date().toLocaleString(), 
    }

    // Saves and resets the form
    setSavedTraining([...savedTraining, trainingData]);
    setDate(new Date());
    setSelectedHorse([]);
    setSelectedSport("");
    setDuration("");
    setNotes("");

    console.log(trainingData);
  }
  
  };


  return (
    <View style={[{ alignItems: 'center', justifyContent: 'center', }, base.container]}>
      <Text style={txtStyles.title}>Harjoitus</Text>
      <View>

        {// SET THE DATE
        }
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            {Icons.calendar}
            <Text style={txtStyles.subtitle}>
              {date.toLocaleDateString('fi-FI')}
            </Text>
            <CustomButton title="Päivämäärä" onPress={showDatePicker} size="small" />
          </View>

          {// SET THE TIME
          }
          <View style={{ flexDirection: 'column', alignItems: 'center', }}>
            {Icons.clock}
            <Text style={txtStyles.subtitle}>
              {date.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' })}
            </Text>
            <CustomButton title="Kellonaika" onPress={showTimePicker} size="small" />
          </View>

        </View>

        {// CHOOSE HORSE
        }

        <SelectList
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
          search={false}
          setSelected={setSelectedHorse}
          data={FakeHorseData.map(({ key, horseName }) => ({ key, value: horseName }))} //should add sorting by horseName (alphabetical order) FakeHorseData.sort((a, b) => a.horseName.localeCompare(b.horseName));
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
          placeholder='Valitse treeni'
          search={false}
          setSelected={setSelectedSport}
          data={dataSport}
          save="value"
        />
        {// EXERCISE DURATION IN MINUTES
        }
        <InputText title='Harjoituksen kesto minuutteina'
          placeholder='min'
          keytype='numeric'
          maxLength={3}
          value={duration}
          onChangeText={setDuration}
          validationType='training'
        />

        {// NOTES
        }
        <NoteInput title='Muistiinpanot'
          placeholder='...'
          keytype='default'
          onChangeText={setNotes}
          value={notes}
        />

        {// SAVE
        }
        <CustomButton title="Tallenna"
          onPress={saveTraining}
          size="small"
        />

      </View>
    </View>
  );
}