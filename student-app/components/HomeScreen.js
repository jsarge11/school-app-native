import React from 'react'
import { View, Text, Button, AlertIOS, Alert } from 'react-native'
import axios from 'axios'


export default class HomeScreen extends React.Component {
    state = {
        students: [],
        isDialogVisible: false
    }
    componentDidMount() {
       let teacher_id = this.props.navigation.getParam('teacherid');

        axios.get('http://192.168.0.15:4000/students?id=' + teacher_id).then(res => {
            this.setState({ students: res.data })
        })
    }
    login = (item, pin) => {
        axios.post('http://192.168.0.15:4000/auth/students', {id: item.st_id, PIN: pin}).then(res => {
            this.props.navigation.navigate('Courses', {
                student: res.data
            })
        }).catch(error => Alert.alert(error.response.data))
    }
    render() {
        let students = this.state.students.map(student => {
            return (
                <Button
                key={student.st_id}
                title={`${student.first_name} ${student.last_name}`}
                onPress={() => AlertIOS.prompt(
                            'Enter your PIN',
                            null,
                            pin => this.login(student, pin))
                }
                color="blue"
                accessibilityLabel="Login to the school app"
             />
            )
        })

        return (
            <View>
                {students}
            </View>
        )
    }
}