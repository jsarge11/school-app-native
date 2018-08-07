import React, {Component} from 'react'
import { View, Text, Alert, Button, StyleSheet } from 'react-native'


export default class Scores extends Component {
render() {
        return (
           <View style={styles.container}>
            <Text>Scores</Text>
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