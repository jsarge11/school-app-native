import React from 'react';
import { createStackNavigator } from 'react-navigation'
import LoginScreen from './components/LoginScreen'
import HomeScreen from './components/HomeScreen';
import Courses from './components/Courses/Courses';
import MathFluency from './components/Courses/MathFluency';
import Assessments from './components/Assessments/Assessments';
import Assessment from './components/Assessments/Assessment/Assessment'
import Practice from './components/Practice/Practice';
import Scores from './components/Scores/Scores';
import Round from './components/Assessments/Round/Round';

const RootStack = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Courses: Courses,
  MathFluency: MathFluency,
  Practice: Practice,
  Scores: Scores,
  Assessments: Assessments,
  Assessment: Assessment,
  Round: Round
});

export default class App extends React.Component {

 render() {
   return (
     <RootStack />
   )
 }
}
