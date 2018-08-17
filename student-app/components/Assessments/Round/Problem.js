import React, {Component} from 'react'
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native'


export default class Problem extends Component {

state = {
    userInput: ""
}
handleInput = (text) => {
    this.setState({ userInput: text}, () => {
        let { userInput } = this.state;
        let { answer } = this.props;
        if (userInput.length === answer.toString().length) {

            if (+userInput === +answer) {
                this.props.gotItCorrect(userInput.length);
            }
            else {
                this.props.gotItIncorrect();
            }
        this.props.selectProblem();
        // this._textInput.clear();

        }
    })
}
clearText = () => {
    this._textInput.setNativeProps({ text: ''});
}

render() {
        return (
           <View style={styles.container}>
            <Text>
                  {this.props.problem.number1}{"\n"}
                  {this.props.problem.operator}
                  {this.props.problem.number2}
            </Text>

            <TextInput
                       ref={component => this._textInput = component}
                       style={styles.input}
                       onChangeText={(text) => this.handleInput(text)}
                       value={this.state.userInput}
                       maxLength={this.props.answer.length}
            />
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