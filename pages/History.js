import React, { useEffect, useState } from 'react';
import base from '../styles/base';
import { TrainingHistoryList } from '../components/flatlist';
import { HistoryItem } from '../components/historyItem';
import { View, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import ButtonStyles from '../styles/buttons';
import txtStyles from '../styles/text';
import { Icons } from '../styles/icons';

import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { DB } from '../FirebaseConfig';
import { useUser } from '../components/userInformation';
import LoadingScreen from '../components/loading';


export default function History() {
  const { user } = useUser();
  const [horseList, setHorseList] = useState([]);
  const [selectedHorse, setSelectedHorse] = useState(null);
  const [trainingData, setTrainingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const selectedHorseName = horseList.find(h => h.id === selectedHorse)?.name || '';

  // useEffect to fetch horse list from Firestore based on logged in user
  useEffect(() => {
    if (!user) return;

    //show only horses that matches userId
    const q = query(
      collection(DB, "horses"),
      where("userId", "==", user.uid)
    );

    //onSnapshot for listening real time changes on "horses" list.
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const horses = [];
      querySnapshot.forEach((doc) => {
        horses.push({ id: doc.id, ...doc.data() });
      });
      setHorseList(horses);
    });

    return () => unsubscribe();
  }, [user]);


  // useEffect to reaload if user OR selected horse changes. If no user or selected horse stop loading
  useEffect(() => {
    if (!user || !selectedHorse) {
      setTrainingData([]);
      setLoading(false);
      return;
    }
    setLoading(true);

    //recieves trainings from database on set limits
    const q = query(
      collection(DB, "trainings"),
      where("userId", "==", user.uid), //userID matches current user
      where("horseId", "==", selectedHorse) //horseId that matches selected horse
    );

    //onSnapshot to listen real time changes about training data
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTrainingData(data);
      setLoading(false); // loading done
    });

    return () => unsubscribe();
  }, [user, selectedHorse]);

  return (
    <View style={base.container}>
      <View style={base.TopBarPosition}>

        {
          //Select horse dropdown
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
          placeholder='Valitse hevonen'
          labelStyles={txtStyles.body}
          search={false}
          setSelected={(val) => setSelectedHorse(val)}
          data={horseList.map(h => ({ key: h.id, value: h.name }))}
          save="key"
        />

        {
          //Showing training history based on selected horse sorted by date
        }

        {loading ? (
          <LoadingScreen />
        ) : trainingData.length === 0 ? (
          <Text style={txtStyles.body}>Hevoselle {selectedHorseName} ei löytynyt tallennettuja treenejä</Text>
        ) : (
          <TrainingHistoryList
            listHistory={trainingData}
            sortBy="date"
            renderItem={({ item }) =>
              <HistoryItem
                trainingDate={item.date}
                horseName={item.horseName}
                trainingType={item.sport}
                minutes={item.duration}
                notes={item.notes}
              />
            }
          />
        )}
      </View>
    </View>
  );
}