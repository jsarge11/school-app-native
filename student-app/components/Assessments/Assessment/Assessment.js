import React, {Component} from 'react'
import { View, Text, Alert, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import axios from 'axios'


export default class Assessment extends Component {
    state = {
        problem_sets: [],
        type: this.props.navigation.getParam('type'),
        operator: this.props.navigation.getParam('operator')
    }
componentDidMount() {
    let id;
    switch(this.state.operator) {
        case('*'):
        id = 1;
        break;
        case('/'):
        id = 2;
        break;
        case('+'):
        id = 3;
        break;
        case('-'):
        id = 5;
        break;
    }
    axios.get('http://192.168.0.4:4000/math/problemsets?id=' + id).then(res => {
        this.setState({ problem_sets: res.data })
    })
}
render() {
    let problem_sets = this.state.problem_sets.map(problem_set => {
        var imagePath;
        switch(problem_set.number) {
            case('1') :
                imagePath = require('../../../numbers/number1.gif')
                break;
            case('2') :
                imagePath = require('../../../numbers/number2.gif')
                break;
            case('3') :
                imagePath = require('../../../numbers/number3.gif')
                break;
            case('4') :
                imagePath = require('../../../numbers/number4.gif')
                break;
            case('5') :
                imagePath = require('../../../numbers/number5.gif')
                break;
            case('6') :
                imagePath = require('../../../numbers/number6.gif')
                break;
            case('7') :
                imagePath = require('../../../numbers/number7.gif')
                break;
            case('8') :
                imagePath = require('../../../numbers/number8.gif')
                break;
            case('9') :
                imagePath = require('../../../numbers/number9.gif')
                break;
            default :
                imagePath = require('../../../numbers/number0.gif')
                break;

        }
        return (
                <TouchableOpacity style={styles.touchableArea} key={problem_set.ps_id} onPress={() => this.props.navigation.navigate('Round', {
                        operator: this.state.operator,
                        number: problem_set.number,
                        student: this.props.navigation.getParam('student'),
                        imagePath: imagePath
                    })}>

                        <Image style={styles.images} source={imagePath}/>

                    <Text style={{textAlign: 'center'}}> {problem_set.name} </Text>
                </TouchableOpacity>
        )
    })
        return (
           <View style={styles.container}>
            <Text style={{fontSize: 50, marginBottom: 50}}>{this.state.type}</Text>
            <View style={styles.numberContainer} >
                {problem_sets}
            </View>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    images: {
        height: 70,
        width: 70
    },
    touchableArea: {
        height: 90
    }
})