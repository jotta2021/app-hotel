import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput
} from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function Register() {
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
          <TextInput style={styles.textInput} placeholder="Nome" />
          <TextInput style={styles.textInput} placeholder="Email" />
          <TextInput style={styles.textInput} placeholder="Senha" />
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
    backgroundColor: '#DCDCDC',
    width: 350,
    height: 50,
    borderRadius: 15,
    fontSize: 16
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: '#4073C8',
    fontFamily: 'Montserrat_700Bold'
  }
})
