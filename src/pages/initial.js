import { View, StatusBar, StyleSheet, Text, Button } from 'react-native'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
export default function Initial() {
  const Navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar styles="auto" />
      <View style={styles.containlogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../localizacao.png')}
          style={{ width: '55%', resizeMode: 'contain' }}
        />
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Montserrat_700Bold',
            marginTop: -110
          }}
        >
          Reserve Já
        </Text>
      </View>
      <Animatable.View style={styles.contain} animation="fadeInUp" delay={600}>
        <Text style={styles.text}>
          Faça viagens, Reserve um quarto e conheça os melhores lugares!
        </Text>
        <TouchableOpacity>
          <Text
            onPress={() => Navigation.navigate('register')}
            style={styles.desc}
          >
            Crie sua conta para começar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonText}>
            <Text
              style={styles.button}
              onPress={() => Navigation.navigate('login')}
            >
              Acessar
            </Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4073C8'
  },
  containlogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2
  },
  contain: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  },

  text: {
    fontFamily: 'Montserrat_700Bold',
    padding: 20,
    fontSize: 20
  },
  desc: {
    color: 'grey',
    marginLeft: 20,
    fontSize: 15
  },
  buttonText: {
    width: 250,
    height: 40,
    backgroundColor: '#4073C8',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 60
  },
  button: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2
  }
})
