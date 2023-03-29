import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import Routes from './src/routes'
import Initial from './src/pages/initial'

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  })

  return (
    <>
      <StatusBar style="auto" />

      <Routes />
    </>
  )
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
*/
