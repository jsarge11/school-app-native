import React, {Component} from 'react'
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native'


export default class Problem extends Component {

state = {
    counter: 0,
}

handleInput = (text) => {
    const answerText = this.props.answer.toString();
    if(text.length === answerText.length) {
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
            <Text>
                  {this.props.problem.number1}{"\n"}
                  {this.props.problem.operator}
                  {this.props.problem.number2}
            </Text>

            <TextInput key={this.state.counter}
                style={styles.input}
                onChangeText={(text) => this.handleInput(text)}
                ref={component => this._textInput = component}
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