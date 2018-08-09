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
    input: ''
}
componentDidMount() {
    let type = this.props.navigation.getParam('type');
    let number = this.props.navigation.getParam('number');
    axios.get('http://10.0.0.74:4000/math/problems?operator=' + type + '&number=' + number).then(res => {
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
   this.selectProblem()
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
handleInput = (text) => {
    this.setState({ input: text}, () => {
        let { answer } = this.state;
        if (text.length === answer.toString().length) {
            console.log(typeof text, typeof answer);

            if (+text === +answer) {
                this.setState({ input: '' }, () => {
                    Alert.alert('Correct!');
                })
            }
            else {
                this.setState({ input: '' }, () => {
                    Alert.alert('Wrong!')
                });
            }
        this.selectProblem();

        }
    })
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
                           handleInput={this.handleInput}
                           input={this.state.input}
                           answer={+this.state.answer}
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
