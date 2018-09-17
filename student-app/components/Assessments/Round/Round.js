import React, {Component} from 'react'
import { View, Text, Alert, Button, StyleSheet } from 'react-native'
import axios from 'axios'
import Problem from './Problem';

export default class Round extends Component {

state = {
    timer: 10,
    countdownNumber: 3,
    problems: [],
    loading: true,
    problem: {number1: '', number2: '', operator: ''},
    answer: '',
    userInput: '',
    score: 0,
    incorrect: 0,
    startButtonVisible: true,
    countdownNumbersVisible: false,
    timerIDs: [],
    containerColor: '#fff'
}
componentDidMount() {
    let type = this.props.navigation.getParam('type');
    let number = this.props.navigation.getParam('number');
    axios.get('http://10.0.0.74:4000/math/problems?operator=' + type + '&number=' + number).then(res => {
        this.setState({ problems: res.data, loading: false })
    })
}

countdown() {
    this.setState({ startButtonVisible: false, countdownNumbersVisible: true });
    setTimeout(() => {
        this.setState({ countdownNumber: this.state.countdownNumber - 1 });
        if (this.state.countdownNumber > 0) {
            this.countdown();
        }
        else {
            this.setState({ countdownNumber: 'Go!' }, () => {
                setTimeout(() => this.setState({ countdownNumber: '' }), 1000);
                this.beginRound();
            })
        }
    }, 1000);
}

beginRound = () => {
   this.selectProblem();
   this.setState({ score: 0 });
   let id = setTimeout(() => this.finishRound(), this.state.timer * 1000);
   let newArr = this.state.timerIDs.slice();
   newArr.push(id);
   this.setState({ timerIDs: newArr})
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

    Alert.alert('your score was ' + score + ' and you got ' + incorrect + ' incorrect');
    axios.post('http://10.0.0.74:4000/math/score?id=' + student[0].st_id, data).then(() => {
        this.setState({ score: 0 });
        this.props.navigation.goBack();
    }).catch(() => Alert.alert('something went wrong, score not logged'))

}
gotItCorrect = (digits) => {
    this.setState({ score: this.state.score + digits, containerColor: '#008000' });
    setTimeout(() => this.setState({ containerColor: '#fff'}), 100);
}
gotItIncorrect = () => {
    this.setState({ incorrect: this.state.incorrect + 1, containerColor: '#ff0000' });
    setTimeout(() => this.setState({ containerColor: '#fff'}), 100);
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

containerStyle = (color) => {
    return {
        flex: 1,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
    }
}
componentWillUnmount() {
   this.state.timerIDs.forEach(item => {
    clearTimeout(item);
   })
}


render() {
        return (
           <View style={this.containerStyle(this.state.containerColor)}>
           {this.state.loading ? <Text> Loading ... </Text> :
            <View>
               {this.state.startButtonVisible ? <Button
                    title="Start"
                    onPress={() => this.countdown() }
                />
                :
                ''}
            </View>
            }
            {this.state.countdownNumber
                ?
                  this.state.countdownNumbersVisible ?
                    <Text style={styles.countDownText}>{this.state.countdownNumber}

                    </Text>
                    :
                    ''
                :
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
    input: {
        height: 40,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5
    },
    countDownText: {
        fontSize: 200
    }
})
