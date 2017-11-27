import React from 'react'
import { Text } from 'react-native'
import CardContainer from './CardContainer'

/**
 * Takes Album array => returns Album Title
 * @param {object[]} props album[ ]
 */
const AlbumDetail = props => {
  return (
    <CardContainer>
      <Text>{props.album.title}</Text>
    </CardContainer>
  )
}

export default AlbumDetail
