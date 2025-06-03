import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text } from 'react-native';
import base from '../styles/base';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import ButtonStyles from '../styles/buttons';
import colors from '../styles/color';
import txtStyles from '../styles/text';
import { InputText } from '../components/txtInput';

export default function AddNewTraining() {

  const [selectedHorse, setSelectedHorse] = React.useState("");
  const [selectedSport, setSelectedSport] = React.useState("");

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
    <View style={base.container}>
      <Text>You can add new training</Text>
      <View>

        <MultipleSelectList
          boxStyles={ButtonStyles.selectList}
          inputStyles={txtStyles.body}
          dropdownStyles={ButtonStyles.selectDropDown}
          checkBoxStyles={ButtonStyles.selectCheckBox}
          badgeStyles={ButtonStyles.selectBadge}
          fontFamily='NotoSansDisplay_400Regular'
          dropdownTextStyles={txtStyles.body}
          arrowicon={<AntDesign name="caretdown" size={18} color={colors.lightBrown} />}
          placeholder='Valitse hevonen tai useampi'
          label="Valitut hevoset"
          labelStyles={txtStyles.body}
          search={true}
          setSelected={(val) => setSelectedHorse(val)}
          data={dataHorse.map(({ key, name }) => ({ key, value: name }))}
          save="value"

        />

        <SelectList
          boxStyles={ButtonStyles.selectList}
          inputStyles={txtStyles.body}
          dropdownStyles={ButtonStyles.selectDropDown}
          fontFamily='NotoSansDisplay_400Regular'
          dropdownTextStyles={txtStyles.body}
          arrowicon={<AntDesign name="caretdown" size={18} color={colors.lightBrown} />}
          placeholder='Valitse vaihtoehto'
          search={false}
          setSelected={(val) => setSelectedSport(val)}
          data={dataSport}
          save="value"
        />



      </View>
    </View>
  );
}