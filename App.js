import React from 'react'
import { Text, View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

/**
 * Main App
 * @returns {JSX}
 */

export default class App extends React.Component {
  render () {
    return (
      <View>
        <Header headerText={'Albums Whatever'} />
        <AlbumList />
      </View>
    )
  }
}
