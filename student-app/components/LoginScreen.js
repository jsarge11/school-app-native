import React from 'react'
import { StyleSheet, TextInput, View, Button, Text, Alert } from 'react-native';
import axios from 'axios'


export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          login: '',
          pin: '',
          loading: false,
        }
      }
      login() {
        this.setState({ loading: true })
        axios.post('http://10.0.0.74:4000/auth/classroom', this.state).then(res => {

          this.props.navigation.navigate('Home', {
            teacherid: res.data.clsr_id
          });
          this.setState({ login: '', pin: '', loading: false });
        }).catch(error =>  {
          Alert.alert(error.response.data);
          this.setState({ loading: false })
        })
      }
      render() {
        return (

          <View style={styles.container}>
            <Text> Fluency Masters </Text>
            <TextInput
            autoCapitalize="none"
            style={styles.input}
            onChangeText={(login) => this.setState({login})}
            value={this.state.login}
            />
            <TextInput
            style={styles.input}
            onChangeText={(pin) => this.setState({pin})}
            value={this.state.pin}
            returnKeyType="go"
            onSubmitEditing={() => this.login()}
            />
            {!this.state.loading ? <Button
               onPress={() => this.login()}
               title="Login"
               color="blue"
               accessibilityLabel="Login to the school app"
            > Login </Button> : <Text> Loading ... </Text>}

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
      },
      images: {
        height: 300,
        width: 300
      }
    });
