import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native'

import * as Animatable from 'react-native-animatable'
import { useState } from 'react'
import { AntDesign } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Register() {
  const Navigator = useNavigation()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.imageContain}>
        <Animatable.Image
          animation="zoomIn"
          style={{ width: '20%', resizeMode: 'contain' }}
          source={require('./../../localizacao.png')}
        />
      </View>
      <Animatable.View style={styles.form} animation="fadeInUp" delay={600}>
        <Text style={styles.title}>Crie sua conta</Text>

        <View style={styles.spaceTextInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Nome"
            keyboardType="text"
          />
          <TextInput
            style={styles.textInput}
            value={user}
            onChange={setUser}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.textInput}
            value={password}
            onChange={setPassword}
            secureTextEntry={true}
            placeholder="Senha"
            keyboardType="text"
          />
          <TouchableOpacity>
            <View style={styles.button}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                Criar conta
              </Text>
            </View>
          </TouchableOpacity>

          <View>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}
            >
              <Text
                style={{ width: 100, height: 1, backgroundColor: '#4073C8' }}
              ></Text>
              <Text>Ou entre usando</Text>
              <Text
                style={{ width: 100, height: 1, backgroundColor: '#4073C8' }}
              ></Text>
            </View>

            <View style={styles.shop}>
              <TouchableOpacity>
                <View
                  style={{
                    width: 100,
                    height: 50,

                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    shadowColor: '#171717',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3
                  }}
                >
                  <AntDesign name="google" size={40} color="#DB4437" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View
                  style={{
                    width: 100,
                    height: 50,

                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    shadowColor: '#171717',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3
                  }}
                >
                  <AntDesign name="apple1" size={40} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4073C8'
  },
  imageContain: {
    flex: 1,
    backgroundColor: '#4073C8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    marginTop: -50,
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  },
  spaceTextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    gap: 25
  },
  textInput: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    width: 350,
    height: 50,
    borderRadius: 15,
    fontSize: 18
  },
  title: {
    textAlign: 'left',
    marginLeft: 35,
    marginTop: 20,
    fontSize: 22,
    color: '#4073C8',
    fontFamily: 'Montserrat_700Bold'
  },
  button: {
    backgroundColor: '#4073C8',
    color: 'white',
    width: 350,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center'
  },
  shop: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center'
  }
})
