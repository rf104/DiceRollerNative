/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageSourcePropType,
  Image,
  Pressable,
} from 'react-native';

import ReactNativeHapticFeedback from "react-native-haptic-feedback";
// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
    imageUrl : ImageSourcePropType
}>

const Dice = ({imageUrl}:DiceProps):React.JSX.Element => {
  return(
      <View>
          <Image
          style = {styles.diceImg}
          source={imageUrl}
          />
      </View>
  )
}


function App(): React.JSX.Element {
  
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne); ///<ImageSourcePropType> by using this this state only accept ImageUrl

  const generateDiceImage = () => {
      let randomImage  = Math.round(Math.random()*6)+1

      if(randomImage===1){
        setDiceImage(DiceOne);
      }
      else if (randomImage===2) setDiceImage(DiceTwo)
      else if (randomImage===3) setDiceImage(DiceThree)
      else if (randomImage===4) setDiceImage(DiceFour)
      else if (randomImage===5) setDiceImage(DiceFive)
      else if (randomImage===6) setDiceImage(DiceSix)
      else setDiceImage(DiceOne)

      ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <>
        <SafeAreaProvider>
              <SafeAreaView style={styles.container}>
                  <Dice imageUrl={diceImage}/>
                  <Pressable
                  onPress={generateDiceImage}
                  style={styles.btn}
                  >
                      <Text
                      style={styles.BtnTxt}
                      >
                          Press Me to Roll
                      </Text>
                  </Pressable>
              </SafeAreaView>
        </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
    diceImg : {
        width:200,
        height:200,

    },
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f7c1c1'
    },

    BtnTxt:{
        borderRadius:14,
        fontSize:20,
        fontWeight:'semibold',
        marginTop:8,

    },
    btn:{
        backgroundColor:'#64d9c7',
        padding:8,
        borderRadius:14,
        marginTop:8,

    }
});

export default App;
