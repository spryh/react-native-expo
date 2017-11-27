import React from 'react'
import { View } from 'react-native'

/**
 * RETURNS Any JSX object
 * @param {object[]} props Any JSX object
 */
const CardSection = props => {
  return <View 
    style={styleSheet.containerStyle}>
    {props.children}
  </View>
}

/**
 * CardSection View Styles
 */
const styleSheet = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'black',
    position: 'relative'
  }
}

export default CardSection
