import React, {Component} from 'react'
import { View, Text, Alert, Button, StyleSheet } from 'react-native'


export default class Courses extends Component {
render() {
        return (
           <View style={styles.container}>
            <Text>Courses</Text>
            <Button
                title="Math Fluency"
                onPress={()=>this.props.navigation.navigate('MathFluency', {
                    student: this.props.navigation.getParam('student')
                })}
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
}})