import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import base from '../styles/base';

import FakeHorseData from '../exampleData/horseData.json';
import StableListComponent from '../components/flatlist';
import { Icons } from '../styles/icons';
import txtStyles from '../styles/text';
import { HorseInformation } from '../components/horseInformation';
import LoadingScreen from '../components/loading';

import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { DB } from '../FirebaseConfig';
import { useUser } from '../components/userInformation';


export default function MyStable() {
  const { user } = useUser();
  const [horses, setHorses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setHorses([]);
      setLoading(false);
      return;
    }

    const q = query(collection(DB, "horses"), where("userId", "==", user.uid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const horseList = [];
      querySnapshot.forEach((doc) => {
        horseList.push({ id: doc.id, ...doc.data() });
      });
      setHorses(horseList);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching horses: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);


  return (
    <View style={base.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {Icons.horseHead}
        {Icons.barn}
      </View>

      <View style={base.bodyContainer}>
        {loading ? (
          <LoadingScreen />
        ) : horses.length === 0 ? (
          <Text style={txtStyles.body}>Tallissa ei hevosia. Voit lisätä niitä profiilistasi.</Text>
        ) : (
          <StableListComponent
            listData={horses}
            sortBy="name"
            renderItem={({ item }) => (
              <HorseInformation
                title={item.name}
                gender={item.gender}
                dateOfBirth={item.birthday}
                onPress={() => { }}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}
