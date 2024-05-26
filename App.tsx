import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Hello() {
  return (
    <View style={styles.mainContainer}>
      <Text>Hello...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})