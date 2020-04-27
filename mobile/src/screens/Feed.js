import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends React.Component{

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.posts} keyExtractor={item => `${item.id}`}
                renderItem={({item}) => (
                    <Post key={item.id} {...item} />
                )}>

                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }
})

export default Feed