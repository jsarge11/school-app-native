import React, {Component} from 'react'
import { View, Text, Alert, Button, StyleSheet } from 'react-native'


export default class Assessments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            multiplication: false,
            division: false,
            addition: false,
            subtraction: false,
            student: props.navigation.getParam('student')
        }
    }
componentDidMount() {
    let { student } = this.state;
    if (student[0].assessments.includes(1)) {
        this.setState({ multiplication: true })
    }
    if (student[0].assessments.includes(2)) {
        this.setState({ division: true })
    }
    if (student[0].assessments.includes(3)) {
        this.setState({ addition: true })
    }
    if (student[0].assessments.includes(4)) {
        this.setState({ subtraction: true })
    }
}

render() {
        let { multiplication, division, addition, subtraction } = this.state;
        return (
           <View style={styles.container}>
            <Text>Assessments</Text>
            {multiplication ? <Button
                title="Multiplication"
                onPress={() => this.props.navigation.navigate('Multiplication', {
                    student: this.props.navigation.getParam('student')
                })}
            /> : ''}
            {division ? <Button
                title="Division"
                onPress={() => this.props.navigation.navigate('Division', {
                    student: this.props.navigation.getParam('student')
                })}
            /> : ''}
            {addition ? <Button
                title="Addition"
                onPress={() => this.props.navigation.navigate('Addition', {
                    student: this.props.navigation.getParam('student')
                })}
            /> : ''}
            {subtraction ? <Button
                title="Subtraction"
                onPress={() => this.props.navigation.navigate('Subtraction', {
                    student: this.props.navigation.getParam('student')
                })}
            /> : ''}
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