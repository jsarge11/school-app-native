import React from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

export default class HomeScreen extends React.Component {
    state = {
        students: []
    }
    componentDidMount() {
       let teacher_id = this.props.navigation.getParam('teacherid');

        axios.get('http://10.0.0.74:4000/students?id=' + teacher_id).then(res => {
            console.log(res.data)
        // this.setState({ students: res.data })
        })
    }
    render() {
        // let students = this.state.students.map(item => {
        //     return (
        //         <Text>
        //             {`${item.first_name} ${item.last_name}`}
        //         </Text>
        //     )
        // })
        return (
            <View>
                {/* {students} */}
            </View>
        )
    }
}