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
            </View>
        )
    }
}