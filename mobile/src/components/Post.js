import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import Author from './Author'

class Post extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Author email='b88660501@gmail.com' nickname='Breno Macêdo' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width*3/4,
        resizeMode: 'contain'
    }
})

export default Post