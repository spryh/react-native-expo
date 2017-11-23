import React from 'react'
import { Text, View } from 'react-native'

const Header = () => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>The Albums App</Text>
    </View>
  )
}

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
