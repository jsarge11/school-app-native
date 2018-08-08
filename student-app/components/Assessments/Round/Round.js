import React, {Component} from 'react'
import { View, Text, Alert, Button, StyleSheet } from 'react-native'


export default class Round extends Component {

state = {
    countdownNumber: 3
}

countdown() {
    setTimeout(() => {
        this.setState({ countdownNumber: this.state.countdownNumber - 1 });
        if (this.state.countdownNumber > 0) {
            this.countdown();
        }
        else {
            this.setState({ countdownNumber: 'Begin!'})
        }
    }, 1000);
}

beginRound() {
    this.countdown();
}
render() {
        return (
           <View style={styles.container}>
            <Button
                title="Start"
                onPress={() => this.beginRound()}
            />
            <Text>{this.state.countdownNumber}</Text>

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
}})
