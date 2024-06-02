import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import StackNavigator from './src/navigators/StackNavigator'
import store from './src/redux/store'

export default function App() {
  return (
   <Provider store={store}>
      <StackNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({})