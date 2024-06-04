import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
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




// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>
//           This is a React Native snapshot test.
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     flex: 1,
//     justifyContent: 'center',
//   },
//   instructions: {
//     color: '#333333',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   welcome: {
//     fontSize: 20,
//     margin: 10,
//     textAlign: 'center',
//   },
// });

// export default App;