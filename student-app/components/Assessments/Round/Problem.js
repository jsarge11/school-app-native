import React, {Component} from 'react'
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native'


export default class Problem extends Component {

state = {
    userInput: ""
}
handleInput = (text) => {
    let { answer } = this.props;
    this.setState({ userInput: text}, () => {
        if (+text === +answer) {
            this.clearText();
            this.props.selectProblem();
        }
    });
}
clearText = () => {
   console.log(this._textInput._lastNativeText);
   this._textInput.clear();
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
            />
            <Button title="clickme"
                    onPress={() => this.clearText()}
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