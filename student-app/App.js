import React from 'react';
import { createStackNavigator } from 'react-navigation'
import LoginScreen from './components/LoginScreen'
import HomeScreen from './components/HomeScreen';

const RootStack = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
});

export default class App extends React.Component {

 render() {
   return (
     <RootStack />
   )
 }
}
