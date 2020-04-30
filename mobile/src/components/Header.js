import React from 'react'
import { Text, View, Platform, Image, StyleSheet } from 'react-native'
import Icon from '../../assets/imgs/icon.png'
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'

class Header extends React.Component{
    render() {

        const name = this.props.name || 'Anonymous'
        const gravatar = this.props.email ? <Gravatar
        options={{ email: this.props.email, secure: true }} /> : null

        return (
            <View style={styles.container} >
                <View style={styles.rowContainer} >
                    <Image source={Icon} style={styles.image} />
                    <Text style={styles.title}>Felix Felix</Text>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.user} >{name}</Text>
                    {gravatar}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#bbb',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    title: {
        color: 'black',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 22
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        fontSize: 12,
        color: '#888',
        marginRight: 10
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10
    }
})

const mapStateToProps = state => ({ email: state.user.email, name: state.user.name })

export default connect(mapStateToProps, null)(Header)