import React from 'react'
import { View } from 'react-native'

/**
 * TAKE props
 * RETURN JSX within CardContainer view
 * @param {'{JSX}'} props Any JSX object
 */
const Card = props => {
  return <View style={styleSheet.containerStyle}>
    {props.children}
  </View>
}

/**
 * Card View Styles
 */
const styleSheet = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#dddddd',
    borderBottomWidth: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 }, // shadow bottom only
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    position: 'relative',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}

export default Card
