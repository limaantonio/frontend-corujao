import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Estrada" component={Estrada} />
    </Tab.Navigator>
  );
}

import SignUp from './pages/SignUp';
import SignUpProfile from './pages/SignUpProfile';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import Emparelhamento from './pages/Emparelhamento';
import SolicitacaoEmparelhamento from './pages/SolicitacaoEmparelhamento';
import Home from './pages/Home';
import Estrada from './pages/Estrada';



const AppStack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none" 
        screenOptions={{
          cardStyle:{
            backgroundColor: '#fff',
          }
        }}
      >
        <AppStack.Screen name="SignUp" component={SignUp}/>
        <AppStack.Screen name="SignUpProfile" component={SignUpProfile}/>
        <AppStack.Screen name="SignIn" component={SignIn}/>
        <AppStack.Screen name="ResetPassword" component={ResetPassword}/>
        <AppStack.Screen name="Emparelhamento" component={Emparelhamento}/>
        <AppStack.Screen name="SolicitacaoEmparelhamento" component={SolicitacaoEmparelhamento}/>
  
        <AppStack.Screen name="Main" component={MyTabs}/>
       
      </AppStack.Navigator>
    </NavigationContainer>
  )
}