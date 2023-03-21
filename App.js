import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'
import { AppLoading } from 'expo'
import Routes from './src/routes'

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  })

  return (
    <>
      <StatusBar style="light" backgroundColor="black" translucent="false" />
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
