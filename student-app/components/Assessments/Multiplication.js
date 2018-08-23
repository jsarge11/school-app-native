import React, {Component} from 'react'
import { View, Text, Alert, Button, StyleSheet } from 'react-native'
import axios from 'axios'


export default class Multiplication extends Component {
    state = {
        problem_sets: [],
    }
componentDidMount() {
    axios.get('http://10.0.0.176:4000/math/problemsets?id=1').then(res => {
        this.setState({ problem_sets: res.data })
    })
}
render() {
    let problem_sets = this.state.problem_sets.map(problem_set => {
        return (
            <Button
                key={problem_set.ps_id}
                title={problem_set.name}
                onPress={() => this.props.navigation.navigate('Round', {
                    type: '*',
                    number: problem_set.number
                })}
            />
        )
    })
        return (
           <View style={styles.container}>
            <Text>Multiplication</Text>
            {problem_sets}
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