import React, {Component} from 'react'
import { View, Text, Alert, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import axios from 'axios'


export default class Multiplication extends Component {
    state = {
        problem_sets: [],
    }
componentDidMount() {
    axios.get('http://10.0.0.74:4000/math/problemsets?id=1').then(res => {
        this.setState({ problem_sets: res.data })
    })
}
render() {
    let problem_sets = this.state.problem_sets.map(problem_set => {
        var imagePath;
        console.log(typeof problem_set.number, problem_set.number);
        switch(problem_set.number) {
            case('1') :
                imagePath = require('../../numbers/number1.gif')
                break;
            case('2') :
                imagePath = require('../../numbers/number2.gif')
                break;
            case('3') :
                imagePath = require('../../numbers/number3.gif')
                break;
            case('4') :
                imagePath = require('../../numbers/number4.gif')
                break;
            case('5') :
                imagePath = require('../../numbers/number5.gif')
                break;
            case('6') :
                imagePath = require('../../numbers/number6.gif')
                break;
            case('7') :
                imagePath = require('../../numbers/number7.gif')
                break;
            case('8') :
                imagePath = require('../../numbers/number8.gif')
                break;
            case('9') :
                imagePath = require('../../numbers/number9.gif')
                break;
            default :
                imagePath = require('../../numbers/number0.gif')
                break;

        }
        return (
                <TouchableOpacity style={styles.touchableArea} key={problem_set.ps_id} onPress={() => this.props.navigation.navigate('Round', {
                        type: '*',
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
            <Text style={{fontSize: 50, marginBottom: 50}}>Multiplication</Text>
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