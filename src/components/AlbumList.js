import React, { Component } from 'react'
import { View } from 'react-native' // Text
import AlbumDetail from './AlbumDetail'


/**
 * Fetches JSON from URL => RETURNS AlbumDetail
 */
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

  /**
   * => RETURNS Albums Map
   */
  renderAlbums() {
    // map is an array helper
    // takes function, return is entered into array slot
    // Key is required. Just use any unique value.
    // Pass AlbumDetail a prop called album
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
  }
  
  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

export default AlbumList
