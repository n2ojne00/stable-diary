import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet, Pressable } from 'react-native';
import { DB } from '../FirebaseConfig';
import { collection, query, where, getDocs, deleteDoc, doc, setDoc, getDoc, } from 'firebase/firestore';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useUser } from '../components/userInformation';
import base from '../styles/base';
import { Icons } from '../styles/icons';
import txtStyles from '../styles/text';


const HorseListScreen = () => {

  const [horses, setHorses] = useState([]);
  const { user } = useUser();

  //Fetching user horses
  useEffect(() => {

    if (user?.uid) {
      fetchHorses();
    }
  }, [user]);

  const fetchHorses = async () => {
    const q = query(collection(DB, 'horses'), where('userId', '==', user.uid));
    const snapshot = await getDocs(q);
    const horseList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setHorses(horseList);
  };

  //Alert to confirm horse removal
  const RemoveHorse = async (horseId) => {
    Alert.alert(
      'Vahvista poisto',
      'Haluatko varmasti poistaa hevosen ja kaikki siihen liittyvät harjoitukset?',
      [
        { text: 'Peruuta', style: 'cancel' },
        {
          text: 'Poista',
          style: 'destructive',
          onPress: async () => {
            try {
              //Fetch horse with the ID
              const horseRef = doc(DB, 'horses', horseId);
              const horseSnap = await getDoc(horseRef);
              if (!horseSnap.exists()) {
                console.warn('Hevosta ei löytynyt');
                return;
              }
              const horseData = horseSnap.data();

              //Saving horse new DB deletedHorses -> "soft removal"
              await setDoc(doc(DB, 'deletedHorses', horseId), {
                ...horseData,
                deletedAt: new Date().toISOString(),
              });

              //Fetch trainings that are match deleted horseID
              const trainingsRef = collection(DB, 'trainings');
              const q = query(trainingsRef, where('horseId', '==', horseId));
              const trainingsSnapshot = await getDocs(q);

              //Moving trainings to DeletedTrainings with date
              const ChangeToDeletedTrainings = trainingsSnapshot.docs.map(async (docSnap) => {
                await setDoc(doc(DB, 'deletedTrainings', docSnap.id), {
                  ...docSnap.data(),
                  deletedAt: new Date().toISOString(),
                });
                await deleteDoc(docSnap.ref);
              });
              await Promise.all(ChangeToDeletedTrainings);

              //Removing original DB
              await deleteDoc(horseRef);

              //Update state to remove horse from list
              setHorses((prev) => prev.filter((h) => h.id !== horseId));
            } catch (err) {
              console.error('Error in removal: ', err);
            }
          },
        },
      ]
    );
  };

  const renderHorse = ({ item }) => (

    <View style={[txtStyles.horseInfoTabTxt]}>


      <View style={{ flexDirection: 'row', marginLeft: wp('3%'), }}>
        <View style={{ flex: 2 }}>
          <Text style={txtStyles.body}>{item.breed}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={txtStyles.body}>{item.gender}</Text>
        </View>
      </View>


      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp('3%') }}>
        <View style={{ flex: 2 }}>
          <Text style={txtStyles.title}>{item.name}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[txtStyles.subtitle, { flexShrink: 1, flexWrap: 'wrap' }]} numberOfLines={3}
            ellipsizeMode="tail">{item.birthday?.substring(0, 4)}</Text>
        </View>
      </View>

      <View style={{ alignItems: 'flex-end', marginRight: 15, }}>
        <Pressable onPress={() => RemoveHorse(item.id)} >
          {Icons.Trash}
        </Pressable>


      </View>


    </View>
  );

  return (
    <View style={[base.container, { paddingTop: 40, alignItems: 'center', }]}>
      <Text style={txtStyles.header}>Poista tallista</Text>
      <FlatList
        data={horses}
        keyExtractor={(item) => item.id}
        renderItem={renderHorse}
        ListEmptyComponent={<Text style={txtStyles.body}>Hevosia ei löydetty.</Text>}
      />
    </View>
  );
};

export default HorseListScreen;

