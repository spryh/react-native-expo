import React from 'react'
import { Text } from 'react-native'

const Header = () => {
  const {textStyle} = styles
  return <Text style = {textStyle}>Albums App!</Text>
}

const styles = {
  textStyle: {
    fontSize: 20 // RN uses camelCase on the styling
  }
}
export default Header

