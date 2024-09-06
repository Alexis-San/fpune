import React from 'react';
import {ScrollView,StyleSheet} from 'react-native';
//Componentes que se van sumando a mi pantalla principal
//import BasicComponents from './src/components/BasicComponents';
import TextComponents from './src/components/TextComponents';
import TextInputComponents from './src/components/TextInputComponents';
import ListNotasComponents from './src/components/ListNotasComponents';
import Home from './src/react-native-elements/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AvatarBasic from './src/react-native-elements/AvatarBasic';
import BadgeBasic from './src/react-native-elements/BadgeBasic';
import CardBasic from './src/react-native-elements/CardBasic';
import TabBasic from './src/react-native-elements/TabBasic';
import PropsEjemplo from './src/navegacion/PropsEjemplo';
import AxiosEjemplo from './src/navegacion/AxiosEjemplo';
import AsyncStorageEjemplo from './src/navegacion/AsyncStorageEjemplo';

//import Componente01 from './src/simulacro-parcial/Componente01';
//import Props02 from './src/simulacro-parcial/Props02';
//import Axios03 from './src/simulacro-parcial/Axios03';
//import AsyncStorage04 from './src/simulacro-parcial/AsyncStorage04';
//parcial

import ComponenteParcial01 from './src/primera-parcial/ComponenteParcial01';
import AxiosParcial03 from './src/primera-parcial/AxiosParcial03';
import PropsParcial02 from './src/primera-parcial/PropsParcial02';
import AsyncStorageParcial04 from './src/primera-parcial/AsyncStorageParcial04';


const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    

       <NavigationContainer>
      <Stack.Navigator initialRouteName="ComponenteParcial01">
        <Stack.Screen name="ComponenteParcial01" component={ComponenteParcial01} />
        <Stack.Screen name="PropsParcial02" component={PropsParcial02} />
        <Stack.Screen name="AxiosParcial03" component={AxiosParcial03} />
        <Stack.Screen name="AsyncStorageParcial04" component={AsyncStorageParcial04} />


      </Stack.Navigator>
    </NavigationContainer>


  );
}
const styles = StyleSheet.create({
});

export default App;
