import React, {Component} from 'react'
import { View, Text, TextInput, Alert, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default class Problem extends Component {

state = {
    userAnswer: '',
    counter: 0,
}

handleInput = (num) => {
   let { userAnswer } = this.state;
   let input = userAnswer + num;
   this.setState({ userAnswer: input })
}
evaluate = () => {
    let { answer } = this.props;
    let stringAnswer = answer.toString();
    let { userAnswer } = this.state;
    if (stringAnswer.length === userAnswer.length) {
       if (stringAnswer == userAnswer) {
           this.props.gotItCorrect(stringAnswer.length);
       }
       else {
           this.props.gotItIncorrect();
       }
       this.props.selectProblem();
       setTimeout(() => this.setState({ userAnswer: '' }), 100);
    }

}
clearText = () => {
    setTimeout(() => {
        this.setState(({counter}) => ({
            counter: counter + 1,
        }));
        this._textInput.clear();
        this._textInput.focus();
    }, 100);
}

render() {
        this.evaluate();
        return (
           <View style={styles.container}>
            <Text style={styles.text}>
                  {this.props.problem.number1}{"\n"}
                  {this.props.problem.operator}
                  {this.props.problem.number2}
            </Text>
            <TextInput key={this.state.counter}
                style={styles.input}
                value={this.state.userAnswer}
                editable={false}
            />
            <View style={styles.numberContainer}>
            <TouchableOpacity onPress={() => this.handleInput('0')}>
                <Image style={styles.images} source={require('../../../numbers/number0.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleInput('1')}>
                <Image style={styles.images} source={require('../../../numbers/number1.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleInput('2')}>
                <Image style={styles.images} source={require('../../../numbers/number2.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleInput('3')}>
                <Image style={styles.images} source={require('../../../numbers/number3.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleInput('4')}>
                <Image style={styles.images} source={require('../../../numbers/number4.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleInput('5')}>
                <Image style={styles.images} source={require('../../../numbers/number5.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleInput('6')}>
                <Image style={styles.images} source={require('../../../numbers/number6.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleInput('7')}>
                <Image style={styles.images} source={require('../../../numbers/number7.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleInput('8')}>
                <Image style={styles.images} source={require('../../../numbers/number8.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleInput('9')}>
                <Image style={styles.images} source={require('../../../numbers/number9.gif')}/>
            </TouchableOpacity>
            </View>
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
    numberContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    input: {
        height: 40,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5
    },
    text: {
        fontSize: 60,
        textAlign: 'right'
    },
    images: {
        height: 60,
        width: 60
    }})