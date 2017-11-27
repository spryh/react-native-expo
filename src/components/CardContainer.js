import React from 'react'
import { View } from 'react-native'

/**
 * RETURN JSX within CardContainer view
 * @param {*} props Any jsx object
 */
const CardContainer = (props) => {
  return <View style={styles.containerViewStyle}>{props.children}</View>
}

/**
 * Container View Styles
 */
const styles = {
  containerViewStyle: {
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

export default CardContainer
