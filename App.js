import React from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'


export default class App extends React.Component {
  render () {
    return (
        <Text> Some Text </Text>
    )
  }
} 

/*       <View style={styles.container}>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b59b6',
    alignItems: 'center',
    justifyContent: 'center'
  }
})*/

// This is taken care of in index.js
// AppRegistry.registerComponent('albums', () => App)
