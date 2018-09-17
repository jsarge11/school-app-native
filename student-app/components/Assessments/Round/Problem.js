import React, {Component} from 'react'
import { View, Text, TextInput, Alert, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default class Problem extends Component {

state = {
    counter: 0,
}

handleInput = (text) => {
    const answerText = this.props.answer.toString();
    if(text.length === answerText.length) {
        if (text === answerText) {
            this.props.gotItCorrect(text.length);
        }
        else {
            this.props.gotItIncorrect();
        }
        this.clearText();
        this.props.selectProblem();
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
        return (
           <View style={styles.container}>
            <Text style={styles.text}>
                  {this.props.problem.number1}{"\n"}
                  {this.props.problem.operator}
                  {this.props.problem.number2}
            </Text>
            <TextInput key={this.state.counter}
                style={styles.input}
                onChangeText={(text) => this.handleInput(text)}
                ref={component => this._textInput = component}
            />
            <View style={styles.numberContainer}>
            <TouchableOpacity>
                <Image style={styles.images} source={require('../../../numbers/number0.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.images} source={require('../../../numbers/number1.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.images} source={require('../../../numbers/number2.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.images} source={require('../../../numbers/number3.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.images} source={require('../../../numbers/number4.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.images} source={require('../../../numbers/number5.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.images} source={require('../../../numbers/number6.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.images} source={require('../../../numbers/number7.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.images} source={require('../../../numbers/number8.gif')}/>
            </TouchableOpacity>
            <TouchableOpacity>
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