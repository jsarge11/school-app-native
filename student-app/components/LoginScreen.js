import React from 'react'
import { StyleSheet, TextInput, View, Button, Text, Alert } from 'react-native';
import axios from 'axios'

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          name: '',
          PIN: ''
        }
      }
      login() {
        axios.post('http://10.0.0.74:4000/auth/students', this.state).then(res => {
          this.props.navigation.push('Home');
          this.setState({ name: '', PIN: '' });
        }).catch(error => Alert.alert(error.response.data))
      }
      render() {
        return (
          <View style={styles.container}>
            <Text> Fluency Masters </Text>
            <TextInput
            style={styles.input}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            />
            <TextInput
            style={styles.input}
            onChangeText={(PIN) => this.setState({PIN})}
            value={this.state.PIN}
            />
            <Button
               onPress={() => this.login()}
               title="Login"
               color="blue"
               accessibilityLabel="Login to the school app"
            > Login </Button>

          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        height: 40,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5
      }
    });
