import React from 'react'
import { Text, View, Platform, Image, StyleSheet } from 'react-native'
import Icon from '../../assets/imgs/icon.png'

class Header extends React.Component{
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.rowContainer} >
                    <Image source={Icon} style={styles.image} />
                    <Text style={styles.title}>Lambe Lambe</Text>
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
        width: '100%'
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
        fontSize: 28
    }
})

export default Header