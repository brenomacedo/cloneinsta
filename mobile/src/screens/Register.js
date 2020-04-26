import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

class Register extends React.Component{
    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Nome' style={styles.input} autoFocus={true}
                value={this.state.name} onChangeText={name => this.setState({ name })} />
                <TextInput keyboardType='email-address' placeholder='Email' style={styles.input} 
                autoFocus={true}
                value={this.state.name} onChangeText={email => this.setState({ email })} />
                <TextInput secureTextEntry={true} 
                placeholder='Password' style={styles.input} autoFocus={true}
                value={this.state.name} onChangeText={password => this.setState({ password })} />
                <TouchableOpacity onPress={() => {}} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})

export default Register