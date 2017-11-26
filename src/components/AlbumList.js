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
        // console.log(fetchedJsonArray[0].artist)
        // Component level state - set the state of Albumlist.state.albums to
        this.setState({ albums: fetchedJsonArray })
      })
      .catch(error => {
        console.error(error)
      })
  }

  renderAlbums() {
    // map is an array helper
    // takes function, return is entered into array slot
    // Key is required. Just use any unique value.
    return this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>)
  }
  
  render() {
    return (
      <View>
        <Text>{this.renderAlbums()}</Text>
      </View>
    )
  }
}

export default AlbumList
