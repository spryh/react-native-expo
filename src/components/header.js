import React from 'react'
import { Text, View } from 'react-native'

// Functional Component for simple presentation of static data 5.31
// I wonder if this works with "headerText" instead of "props"

/**
 * Returns header JSX w/ styling
 * @param {string} props headerText
 */
const Header = (props) => {
  const { textStyle, viewStyle } = styles

  // Parent component should provide HeaderText

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text> 
    </View>
  )
}

/**
 * Style Sheet for Header
 * @prop textStyle
 * @prop viewStyle
 */
const styles = {
  textStyle: {
    fontSize: 30 // RN uses camelCase on the styling
  }, // Separate with comma

  viewStyle: {
    backgroundColor: '#f8f8f8', // justifyContent alignItems to center in the container
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2, // For some reason this is required?
    position: 'relative'
  }
}
export default Header
