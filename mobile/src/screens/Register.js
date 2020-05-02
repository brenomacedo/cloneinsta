import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { createUser } from '../store/actions/user'

class Register extends React.Component{
    state = {
        name: '',
        email: '',
        password: ''
    }

    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Profile')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Nome' style={styles.input} autoFocus={true}
                value={this.state.name} onChangeText={name => this.setState({ name }) } />
                <TextInput keyboardType='email-address' placeholder='Email' style={styles.input} 
                autoFocus={true}
                value={this.state.email} onChangeText={email => this.setState({ email })} />
                <TextInput secureTextEntry={true} 
                placeholder='Password' style={styles.input} autoFocus={true}
                value={this.state.password} onChangeText={password => this.setState({ password })} />
                <TouchableOpacity onPress={() => {
                    this.props.onCreateUser(this.state)
                }} style={styles.button}>
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

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

const mapStateToProps = state => ({
    isLoading: state.user.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)