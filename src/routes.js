import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/home'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import Details from './pages/details'
import Initial from './pages/initial'
import Register from './pages/register'
import Login from './pages/login'
const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="initial"
          component={Initial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'Reserve já',
            headerTitleStyle: {
              fontFamily: 'Montserrat_500Medium',
              color: 'blue'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-bag" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={Details}
          options={{
            title: 'Detalhes',
            headerBackTitleStyle: {
              fontFamily: 'Montserrat_700Bold',
              color: 'blue'
            },
            headerRight: () => (
              <TouchableOpacity>
                <Feather name="shopping-bag" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />

        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routes
