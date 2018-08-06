import React from 'react'
import { StyleSheet, TextInput, View, Button, Text, Alert } from 'react-native';
import axios from 'axios'

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          initials: '',
          pin: ''
        }
      }
      login() {
        axios.post('http://10.0.0.74:4000/auth/classroom', this.state).then(res => {
          this.props.navigation.navigate('Home', {
            teacherid: res.data.t_id
          });
          this.setState({ initials: '', pin: '' });
        }).catch(error => Alert.alert(error.response.data))
      }
      render() {
        return (
          <View style={styles.container}>
            <Text> Fluency Masters </Text>
            <TextInput
            style={styles.input}
            onChangeText={(initials) => this.setState({initials})}
            value={this.state.initials}
            />
            <TextInput
            style={styles.input}
            onChangeText={(pin) => this.setState({pin})}
            value={this.state.pin}
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
