import React, {Component} from 'react'
import { View, Text, Alert, Button, StyleSheet } from 'react-native'
import axios from 'axios'

export default class Round extends Component {

state = {
    timer: 60,
    countdownNumber: 3,
    problems: [],
    loading: true
}
componentDidMount() {
    let type = this.props.navigation.getParam('type');

    axios.get('http://10.0.0.74:4000/math/problems?operator=' + type).then(res => {
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

beginRound() {
    console.log(this.state.problems.length);

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
