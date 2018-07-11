import React from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      PIN: ''
    }
  }
  hello() {
    console.log('this.hello');
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
           onPress={() => this.hello()}
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
