import React from 'react'
import { Text } from 'react-native'

export default class App extends React.Component {
  render () {
    return <Text> Some Text </Text>
  }
}

/* Deprecated from CRNA template
import { StyleSheet, Text, View } from 'react-native'
<View style={styles.container}>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b59b6',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
*/

// This is taken care of in index.js
// AppRegistry.registerComponent('albums', () => App)
