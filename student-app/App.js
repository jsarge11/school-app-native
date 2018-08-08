import React from 'react';
import { createStackNavigator } from 'react-navigation'
import LoginScreen from './components/LoginScreen'
import HomeScreen from './components/HomeScreen';
import Courses from './components/Courses/Courses';
import MathFluency from './components/Courses/MathFluency';
import Assessments from './components/Assessments/Assessments';
import Practice from './components/Practice/Practice';
import Scores from './components/Scores/Scores';
import Multiplication from './components/Assessments/Multiplication';
import Division from './components/Assessments/Division';
import Addition from './components/Assessments/Addition';
import Subtraction from './components/Assessments/Subtraction';
import Round from './components/Assessments/Round/Round';

const RootStack = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Courses: Courses,
  MathFluency: MathFluency,
  Practice: Practice,
  Scores: Scores,
  Assessments: Assessments,
  Multiplication: Multiplication,
  Division: Division,
  Addition: Addition,
  Subtraction: Subtraction,
  Round: Round
});

export default class App extends React.Component {

 render() {
   return (
     <RootStack />
   )
 }
}
