import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View, Pressable, Animated, useWindowDimensions, SafeAreaView, Platform, Switch } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import ViewShot from "react-native-view-shot";
import * as Sharing from 'expo-sharing';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { rzeczowniki, czasowniki, przymiotnikm, przymiotnikz, modalne, start, przywitanie, datasemi } from "./data/data";

const rzeczownikiarr = rzeczowniki.split('\n')
const czasownikiarr = czasowniki.split('\n')
const przymiotnikmarr = przymiotnikm.split('\n')
const przymiotnikzarr = przymiotnikz.split('\n')
const modalnearr = modalne.split('\n')
const startarr = start.split('\n')
const przywitaniearr = przywitanie.split('\n')

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function uzgodnijrodzaj() {
  let rzeczownik = rzeczownikiarr[randomIntFromInterval(0, rzeczownikiarr.length - 1)]
  let przymiotnik = ''
  let modalny = ''
  let start = startarr[randomIntFromInterval(0, startarr.length - 1)]

  if (randomIntFromInterval(1, 2) == 1) {
    switch (rzeczownik[rzeczownik.length - 1]) {
      case 'a':
        przymiotnik = przymiotnikzarr[randomIntFromInterval(0, przymiotnikzarr.length - 1)]
        modalny = modalnearr[randomIntFromInterval(0, modalnearr.length - 1)]
        return start + " " + przymiotnik + " " + rzeczownik + " to coś co " + modalny + " " + czasownikiarr[randomIntFromInterval(0, czasownikiarr.length - 1)];
        //console.log('żeński.');
        break;
      case 'y':
        przymiotnik = przymiotnikzarr[randomIntFromInterval(0, przymiotnikzarr.length - 1)]
        modalny = modalnearr[randomIntFromInterval(0, modalnearr.length - 1)]
        return start + " " + przymiotnik + " " + rzeczownik + " to coś co " + modalny + " " + czasownikiarr[randomIntFromInterval(0, czasownikiarr.length - 1)];
        //console.log('żeński');
        break;
      case 'ę':
        przymiotnik = przymiotnikzarr[randomIntFromInterval(0, przymiotnikzarr.length - 1)]
        modalny = modalnearr[randomIntFromInterval(0, modalnearr.length - 1)]
        return start + " " + przymiotnik + " " + rzeczownik + " to coś co " + modalny + " " + czasownikiarr[randomIntFromInterval(0, czasownikiarr.length - 1)];
        //console.log('żeński');
        break;
      case 'o':
        przymiotnik = przymiotnikzarr[randomIntFromInterval(0, przymiotnikzarr.length - 1)]
        modalny = modalnearr[randomIntFromInterval(0, modalnearr.length - 1)]
        return start + " " + przymiotnik + " " + rzeczownik + " to coś co " + modalny + " " + czasownikiarr[randomIntFromInterval(0, czasownikiarr.length - 1)];
        //console.log('żeński');
        break;
      default:
        przymiotnik = przymiotnikmarr[randomIntFromInterval(0, przymiotnikmarr.length - 1)]
        modalny = modalnearr[randomIntFromInterval(0, modalnearr.length - 1)]
        return start + " " + przymiotnik + " " + rzeczownik + " to coś co " + modalny + " " + czasownikiarr[randomIntFromInterval(0, czasownikiarr.length - 1)];
      //console.log('męski');
    }
  } else {
    switch (rzeczownik[rzeczownik.length - 1]) {
      case 'a':
        przymiotnik = przymiotnikzarr[randomIntFromInterval(0, przymiotnikzarr.length - 1)]
        return start + " " + przymiotnik + " " + rzeczownik + " to " + rzeczownikiarr[randomIntFromInterval(0, rzeczownikiarr.length)];
        //console.log('żeński.');
        break;
      case 'y':
        przymiotnik = przymiotnikzarr[randomIntFromInterval(0, przymiotnikzarr.length - 1)]
        return start + " " + przymiotnik + " " + rzeczownik + " to " + rzeczownikiarr[randomIntFromInterval(0, rzeczownikiarr.length)];
        //console.log('żeński');
        break;
      case 'ę':
        przymiotnik = przymiotnikzarr[randomIntFromInterval(0, przymiotnikzarr.length - 1)]
        return start + " " + przymiotnik + " " + rzeczownik + " to " + rzeczownikiarr[randomIntFromInterval(0, rzeczownikiarr.length)];
        //console.log('żeński');
        break;
      case 'o':
        przymiotnik = przymiotnikzarr[randomIntFromInterval(0, przymiotnikzarr.length - 1)]
        return start + " " + przymiotnik + " " + rzeczownik + " to " + rzeczownikiarr[randomIntFromInterval(0, rzeczownikiarr.length)];
        //console.log('żeński');
        break;
      default:
        przymiotnik = przymiotnikmarr[randomIntFromInterval(0, przymiotnikmarr.length - 1)]
        return start + " " + przymiotnik + " " + rzeczownik + " to " + rzeczownikiarr[randomIntFromInterval(0, rzeczownikiarr.length)];
      //console.log('męski');
    }
  }

}



function Start({ navigation }) {
  const { height, width } = useWindowDimensions();
  const [username, setusername] = useState('');

  return (
    <SafeAreaView style={[styles.container, { flexDirection: 'column' }]}>
      <StatusBar style="auto" />
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 30 }}>
        <Text style={{ fontSize: 48, textAlign: 'center', textTransform: 'uppercase', }}>{przywitaniearr[randomIntFromInterval(0, przywitaniearr.length - 1)]}!</Text>
        <Text style={{ fontSize: 16 }}>podaj swoje imię:</Text>
        <TextInput style={styles.textinput} placeholder={'imię'}
          onChangeText={(value) => setusername(value)}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Pressable style={styles.button} onPress={() => { navigation.navigate("Main", { name: username }) }}>
          <FontAwesome name="sign-in" size={64} color={'#000'} style={{ textAlign: 'center', position: 'absolute', opacity: 0.1 }} />
          <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 18, textShadowOffset: { width: 0, height: 0 }, textShadowColor: 'black', textShadowRadius: 2, zIndex: 1 }}>{'LESGOS'}</Text></Pressable>
      </View>
      <Text style={{ fontSize: 14, position: 'absolute', bottom: 20, textAlign: 'center' }}>Aplikacja nie zbiera żadnych danych. Informacja, którą podasz, zostanie zapisana w pamięci *tymczasowej* Twojego urządzenia.</Text>
    </SafeAreaView>
  )
}


function Main({ route, navigation }) {
  const { height, width } = useWindowDimensions();

  const viewShot = useRef(null);
  async function captureViewShot() {
    if (Platform.OS == 'web') {
      alert("udostępnianie cytatu nie działa na wersji webowej :(")
    }
    const imageURI = await viewShot.current.capture();
    Sharing.shareAsync("file://" + imageURI)
  };

  let tekst = useRef(uzgodnijrodzaj())
  let semigenerated = useRef(generatesemi())
  function generatesemi() {
    return datasemi.podmiot[randomIntFromInterval(0, datasemi.podmiot.length - 1)] + " " + datasemi.orzeczenie1[randomIntFromInterval(0, datasemi.orzeczenie1.length - 1)] + " " + datasemi.łącznik[randomIntFromInterval(0, datasemi.łącznik.length - 1)] + " " + datasemi.dookreślenie[randomIntFromInterval(0, datasemi.dookreślenie.length - 1)] + " " + datasemi.orzeczenie2[randomIntFromInterval(0, datasemi.orzeczenie2.length - 1)]
  }

  const [isloading, setisloading] = useState(false)

  useEffect(() => {
    if (isloading == true) {
      fadeOut();
      //fallback dla useWindowDimensions który rerenderuje generowany tekst przy zmianie rozmiaru okna. dlatego tekst jest w useRef a nie useState
      isEnabled == false ? tekst.current = uzgodnijrodzaj() : semigenerated.current = generatesemi()
      setisloading(false);
      fadeIn()
    }
  }, [isloading]);

  useEffect(() => {
    fadeIn()
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false
    }).start();
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: height / 11 }}>
        <Animated.Text style={{ opacity: 1 }}>full random</Animated.Text>
        <Switch
          style={{ marginHorizontal: 10 }}
          trackColor={{ false: "#000", true: "#72E4ED" }}
          thumbColor={isEnabled ? "#fff" : "#fff"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        /><Text>semi random</Text>
      </View>
      <ViewShot style={{ padding: 40 }}
        ref={viewShot}
        options={{ format: 'png', quality: 1, }}>
        <View style={[styles.blokcytatu, { width: width * 0.7 }]}>
          <View style={styles.ikonacytatu}>
            <FontAwesome name="quote-left" size={64} color={'#fff'} style={{ opacity: .8 }} />
          </View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={styles.tekstcytatu}>
              {isEnabled == false ? tekst.current : semigenerated.current}
            </Text>
          </Animated.View>
          <View style={styles.pozdrowienie}>
            <Text style={styles.pozdrowienietekst}>
              <FontAwesome name="heart" size={16} color={'#fff'} style={{ opacity: .8 }} />
              {" Wygenerowano dla: "}{route.params.name}
            </Text>
          </View>
        </View>
      </ViewShot>
      <View style={{ position: 'absolute', bottom: 40, right: 40, flexDirection: 'row', }}>
        <Pressable onPress={() => captureViewShot()} android_ripple={{ color: '#fff', borderless: true }}>
          <View style={styles.actionbutton}>
            <FontAwesome name="share-alt" color={'#fff'} style={{ fontSize: 24 }} /></View>
        </Pressable>
        <Pressable onPress={() => setisloading(true)} android_ripple={{ color: '#fff', borderless: true }}>
          <View style={styles.actionbutton}>
            <FontAwesome name="refresh" color={'#fff'} style={{ fontSize: 24 }} /></View>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCFFE0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  blokcytatu: {
    backgroundColor: '#72E4ED',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    paddingBottom: 80,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  ikonacytatu: {
    position: 'absolute',
    top: -20,
    left: -20,
  },
  tekstcytatu: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'right',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  pozdrowienie: {
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20
  },
  pozdrowienietekst: {
    fontSize: 16,
    color: '#fff',
  },
  username: {
    fontSize: 18,
  },
  textinput: {
    fontSize: 14,
    textAlign: 'center',
    borderBottomWidth: 3,
    borderColor: '#fff',
    borderRadius: 4,
    padding: 5,
    marginVertical: 20,
    width: 150,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  button: {
    backgroundColor: '#72E4ED',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
  },
  buttonsqr: {
    backgroundColor: '#72E4ED',
    borderRadius: 4,
    padding: 10,
    margin: 20,
  },
  actionbutton: {
    marginHorizontal: 10, opacity: .8, backgroundColor: '#72E4ED', width: 60, height: 60, borderRadius: 100, justifyContent: 'center', alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
  }
});
