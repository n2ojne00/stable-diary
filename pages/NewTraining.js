import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import base from '../styles/base';
import { SelectList } from 'react-native-dropdown-select-list';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import ButtonStyles from '../styles/buttons';
import txtStyles from '../styles/text';
import FakeHorseData from '../exampleData/horseData.json';
import { InputText, NoteInput } from '../components/txtInput';
import { CustomButton } from '../components/pressable';
import { Icons } from '../styles/icons';
import KeyboardScrollWrapper from '../components/scrollview';

import { collection, query, where, onSnapshot, addDoc } from "firebase/firestore";
import { DB } from '../FirebaseConfig';
import { useUser } from '../components/userInformation';
import { useNavigation } from '@react-navigation/native';


export default function AddNewTraining() {

  const navigation = useNavigation();

  const [savedTraining, setSavedTraining] = useState([]);
  //console.log("Tallennetut harjoitukset: ", savedTraining);
  const { user } = useUser();
  const [horseList, setHorseList] = useState([]);

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

  //This to firestore ?
  const dataSport = [
    { key: '1', value: 'Kouluratsastus' },
    { key: '2', value: 'Esteet' },
    { key: '3', value: 'Puomityöskentely' },
    { key: '4', value: 'Kenttäratsastus' },
    { key: '5', value: 'Maastakäsittely' },
    { key: '6', value: 'Monté' },
    { key: '7', value: 'Lännenratsastus' },
    { key: '8', value: 'Hölkkäajo' },
    { key: '9', value: 'Vetoajo' },
    { key: '10', value: 'Raviurheilu' },
    { key: '11', value: 'Kävelytys' },
    { key: '12', value: 'Maasto' },
    { key: '13', value: 'Kilpailu' },

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
    return true;
  };

  useEffect(() => {
    if (!user) return;

    const q = query(collection(DB, "horses"), where("userId", "==", user.uid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const horses = [];
      querySnapshot.forEach((doc) => {
        horses.push({ id: doc.id, ...doc.data() });
      });
      setHorseList(horses);
    });

    return () => unsubscribe();
  }, [user]);

  const saveTraining = async () => {
    const canSave = acceptSaving();
    if (!canSave) return;

    const selectedHorseObj = horseList.find(h => h.id === selectedHorse);

    const trainingData = {
      date: date.toISOString(),
      horseId: selectedHorseObj?.id,
      horseName: selectedHorseObj?.name,
      sport: selectedSport,
      duration,
      notes,
      userId: user.uid,
      saveDate: new Date().toISOString()
    };

    try {
      await addDoc(collection(DB, "trainings"), trainingData);
      alert("Harjoitus tallennettu!");

      setSavedTraining([...savedTraining, trainingData]);
      setDate(new Date());
      setSelectedHorse(""); //no visual effect??
      setSelectedSport(""); //no visual effect??
      setDuration("");
      setNotes("");
      //navigation.navigate('History');
    } catch (error) {
      console.error("Virhe tallennettaessa:", error);
      alert("Tallennus epäonnistui.");
    }
  };


  return (
    <KeyboardScrollWrapper>
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
            maxHeight={hp("20%")}
            fontFamily='NotoSansDisplay_400Regular'
            dropdownTextStyles={txtStyles.body}
            arrowicon={Icons.arrowDown}
            placeholder='Hevonen'
            search={false}
            setSelected={(val) => setSelectedHorse(val)}
            data={horseList.map(h => ({ key: h.id, value: h.name }))}
            save="key"
          />

          {// TYPE OF TRAINING
          }

          <SelectList
            boxStyles={ButtonStyles.selectList}
            inputStyles={txtStyles.body}
            dropdownStyles={ButtonStyles.selectDropDown}
            maxHeight={hp("20%")}
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
          />

        </View>
      </View>
    </KeyboardScrollWrapper>
  );
}