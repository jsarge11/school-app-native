import React, {Component} from 'react'
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native'


export default class Problem extends Component {

render() {
    console.log(this.props.input);
        return (
           <View style={styles.container}>
            <Text>
                  {this.props.problem.number1}{"\n"}
                  {this.props.problem.operator}
                  {this.props.problem.number2}
            </Text>
            <TextInput style={styles.input}
                       onChangeText={(text) => this.props.handleInput(text)}
                       value={this.props.input}
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