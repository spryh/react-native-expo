import React, { Component } from 'react'
import { Text, View } from 'react-native'

// Class Component for handling dynamic data 5.31

class AlbumList extends Component {
  componentWillMount () {
    console.log('AlbumList Component Mounted')
    // Shake expo phone and Debug Remotely in local browser
    // Use debugger and Console Sources to hit a breakpoint
    // console.log('https://rallycoding.herokuapp.com/api/music_albums')
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(fetched => fetched.json())
      .then(fetchedJson => {
        console.log(fetchedJson)
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    return (
      <View>
        <Text>Album List 2</Text>
      </View>
    )
  }
}

export default AlbumList
