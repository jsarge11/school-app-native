import React, {Component} from 'react'
import { View, Text, Alert, Button, StyleSheet } from 'react-native'
import axios from 'axios'
import Problem from './Problem';

export default class Round extends Component {

state = {
    timer: 60,
    countdownNumber: 3,
    problems: [],
    loading: true,
    problem: {number1: '', number2: '', operator: ''},
    answer: '',
    userInput: '',
    score: 0,
    incorrect: 0
}
componentDidMount() {
    let type = this.props.navigation.getParam('type');
    let number = this.props.navigation.getParam('number');
    axios.get('http://192.168.0.15:4000/math/problems?operator=' + type + '&number=' + number).then(res => {
        this.setState({ problems: res.data, loading: false })
    })
}

countdown() {
    setTimeout(() => {
        this.setState({ countdownNumber: this.state.countdownNumber - 1 });
        if (this.state.countdownNumber > 0) {
            this.countdown();
        }
        else {
            this.setState({ countdownNumber: 'Begin!'}, () => {
                setTimeout(() => this.setState({ countdownNumber: '' }), 1000);
                this.beginRound();
            })
        }
    }, 1000);
}

beginRound = () => {
   this.selectProblem();
   this.setState({ score: 0 });
   setTimeout(() => this.finishRound(), this.state.timer * 1000);
}
finishRound = () => {
    let { score, incorrect} = this.state;
    let student = this.props.navigation.getParam('student');
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
	let day = dateObj.getUTCDate();
	let year = dateObj.getUTCFullYear();
    let date = month + '/' + day + '/' + year;
   
    let data = {
        score: score,
        incorrect: incorrect,
        operator: this.props.navigation.getParam('type'),
        number: this.props.navigation.getParam('number'),
        date: date
    }
    console.log(data);

    Alert.alert('your score was ' + score + ' and you got ' + incorrect + ' incorrect');
    axios.post('http://192.168.0.15:4000/math/score?id=' + student[0].st_id, data).then(() => {
        this.setState({ score: 0 });
        this.props.navigation.goBack();
    }).catch(() => Alert.alert('something went wrong, score not logged'))
    
}
gotItCorrect = (digits) => {
    this.setState({ score: this.state.score + digits })
}
gotItIncorrect = () => {
    this.setState({ incorrect: this.state.incorrect + 1 })
}
calculateAnswer = () => {
    let { number1, number2, operator } = this.state.problem;
    switch(operator) {
        case('*'):
            this.setState({ answer: number1 * number2 })
            break;
        case('/'):
            this.setState({ answer: number1 / number2 })
            break;
        case('+'):
            this.setState({ answer: number1 + number2 })
            break;
        case('-'):
            this.setState({ answer: number1 - number2 })
            break;
        default:
            break;
    }
}
selectProblem = () => {
    let number = Math.floor(Math.random() * 12);
    this.setState({ problem: this.state.problems[number]}, () => {
        this.calculateAnswer();
    });

}
render() {
        return (
           <View style={styles.container}>
           {this.state.loading ? <Text> Loading ... </Text> :
            <Button
                title="Start"
                onPress={() => this.countdown()}
            />
            }
            {this.state.countdownNumber
                ? <Text>{this.state.countdownNumber}</Text> :
                  <Problem problem={this.state.problem}
                           answer={+this.state.answer}
                           selectProblem={this.selectProblem}
                           gotItCorrect={this.gotItCorrect}
                           gotItIncorrect={this.gotItIncorrect}
                  />
            }
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5
    }})
