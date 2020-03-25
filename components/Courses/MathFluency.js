import React from 'react'
import { View, Text, Alert, Button, StyleSheet } from 'react-native'


export default function MathFluency(props) {

    return (
       <View style={styles.container}>
        <Text>MathFluency</Text>
        <Button
            title="Assessments"
            onPress={() => props.navigation.navigate('Assessments', {
                student: props.navigation.getParam('student')
            })}
        />
        <Button
            title="Practice"
            onPress={() => props.navigation.navigate('Practice', {
                student: props.navigation.getParam('student')
            })}
        />
        <Button
            title="Scores"
            onPress={() => props.navigation.navigate('Scores', {
                student: props.navigation.getParam('student')
            })}
        />
       </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
}})