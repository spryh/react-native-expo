import React, { Component } from 'react'
import { Text, View } from 'react-native'

// Class Component for handling dynamic data 5.31

class AlbumList extends Component {
  componentWillMount () {
    // Shake expo phone and Debug Remotely in local browser
    console.log('componentWillMount in AlbumList')
    debugger
  }
  render () {
    return (
      <View>
        <Text>AlbumList</Text>
      </View>
    )
  }
}

export default AlbumList
