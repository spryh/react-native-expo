import React, { Component } from 'react'
import { Text, View } from 'react-native'

// Class Component for handling dynamic data 5.31

class AlbumList extends Component {
  state = { albums: [] }

  componentWillMount() {
    console.log('AlbumList Component Mounted')
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(fetched => fetched.json())
      // This is the array of Json objects
      .then(fetchedJsonArray => {
        console.log(fetchedJsonArray)
        console.log(fetchedJsonArray[0].artist)
        //console.log(fetchedJson)
        
        // Component level state - set the state of Albumlist.state.albums to
        this.setState({ albums: fetchedJson })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    console.log(this.state)
    return (
      <View>
        <Text>Album List</Text>
      </View>
    )
  }
}

export default AlbumList
