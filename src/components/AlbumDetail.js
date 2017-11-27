import React from 'react'
import { Text } from 'react-native'
import Card from './CardSection'
import CardSection from './CardSection'

/**
 * TAKE Album array
 * RETURN Album Title
 * @param {object[]} props album[ ]
 */
const AlbumDetail = props => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  )
}

export default AlbumDetail
