import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Recomendado() {
  const [recomendado, setRecomendado] = useState([
    {
      imagem:
        'https://vidasemparedes.com.br/wp-content/uploads/2022/06/penedoal-vidasemparedes-8.jpg',
      nome: 'Igreja Das Correntes'
    },
    {
      imagem:
        'https://media-cdn.tripadvisor.com/media/photo-s/08/19/c9/8a/forte-da-rocheira.jpg',
      nome: 'Rocheira'
    }
  ])

  return (
    <FlatList
      numColumns={2}
      data={recomendado}
      keyExtractor={item => String(item.key)}
      renderItem={({ item }) => <ListItem data={item} />}
    />
  )
}
function ListItem({ data }) {
  return (
    <TouchableOpacity>
      <ImageBackground
        blurRadius={5}
        style={styles.container}
        source={{ uri: data.imagem }}
      >
        <Text style={styles.nome}>{data.nome}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 130,
    width: 230,
    marginRight: 20,
    borderRadius: 20,
    marginBottom: 40,
    opacity: 0.8,
    backgroundColor: '#000',
    marginLeft: 15,
    padding: 12
  },
  nome: {
    fontFamily: ' Montserrat_700Bold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
    textShadowColor: '#000'
  }
})
