import React from 'react'
import { Text, View } from 'react-native'
import Header from './src/components/header'

export default class App extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Text> Put the header here </Text>
        <Header />
      </View>
    )
  }
}
