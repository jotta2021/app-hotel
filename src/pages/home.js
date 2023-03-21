import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image
} from 'react-native'
import { ScrollView } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Indication from '../components/indication'
import Recomendado from '../components/recomendation'

export default function Home() {
  const [hotel, setHotel] = useState([
    {
      nome: ' São Francisco',
      descrição:
        'O Hotel São Francisco é uma excelente opção para pessoas que visitam Penedo, oferecendo um ambiente familiar e várias comodidades que vão tornar a sua estadia mais especial.',
      imagem:
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/26513605.jpg?k=afcf23eaae91e947b8116c8ceedbb6f4868ed88bd0eedf8a865a98e0e06c8af6&o=&hp=1',
      key: 1
    },

    {
      nome: ' Rochedo',
      descrição:
        'A propriedade oferece quartos família e terraço ao ar livre. O hotel oferece piscina ao ar livre aberta o ano todo, recepção 24 horas e Wi-Fi gratuito.',
      imagem:
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/330461770.jpg?k=35cfdc305faab6d283f1362de640d05d31ee371d4940cac0115b2561a7ba23c0&o=&hp=1',
      key: 2
    },
    {
      nome: 'Encantos ',
      descrição:
        'Encontrar um hotel de pequeno porte econômico em Penedo não precisa ser uma tarefa difícil. Conheça o Hotel Encantos de Penedo, uma excelente opção para viajantes como você.',
      imagem:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/2a/54/fb/hotel-encantos-de-penedo.jpg?w=700&h=-1&s=1',
      key: 3
    },
    {
      nome: 'O Laçador',
      descrição:
        'A Pousada O Lacador oferece a seus hóspedes várias comodidades nos quartos, como minibar e ar-condicionado. Além disso, acessar a internet é possível com o wi-fi gratuito disponível.',
      imagem: 'https://www.pousadas.vip/imgempresas/o-lacador-7785-LsvW.jpg',
      key: 4
    }
  ])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#fff', width: '100%' }}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <TouchableOpacity>
            <Feather name="search" size={24} />
          </TouchableOpacity>

          <TextInput placeholder="Pesquisar hotel" style={styles.input} />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Hoteis de Penedo</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          numColumns={4}
          keyExtractor={item => String(item.key)}
          data={hotel}
          renderItem={({ item }) => <ListItem data={item} />}
        />
      </ScrollView>

      <View>
        <Text style={styles.title}>Você também pode visitar</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Indication />
      </ScrollView>
      <View>
        <Text style={styles.title}>Recomendado</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator>
        <Recomendado />
      </ScrollView>
    </ScrollView>
  )
}

function ListItem({ data }) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detalhes')
      }}
      style={styles.cx}
    >
      <View style={styles.cx1}>
        <Image style={styles.imagem} source={{ uri: data.imagem }} />

        <View style={styles.contentNomeDot}>
          <Text style={styles.nome}>{data.nome}</Text>
          <View style={styles.dot}></View>
          <Text style={styles.novo}>Novo</Text>
        </View>
        <View>
          <Text style={styles.descricao}>{data.descrição}</Text>
        </View>

        <View style={styles.footer}>
          <View style={{ width: '80%' }}>
            <Text style={styles.preco}>Quartos a partir de R$50,00</Text>
          </View>
          <View style={{ width: '20%' }}>
            <Ionicons name="ios-add-circle" size={24} color="black" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 15
  },
  inputArea: {
    width: '98%',
    alignItems: 'center',
    flexDirection: 'row',
    height: 37,
    borderRadius: 10,
    backgroundColor: 'white',
    marginLeft: 15,
    gap: 10
  },
  input: {
    width: '90%',
    fontFamily: 'Monteserrat_500Medium',
    fontSize: 16,
    marginLeft: 10
  },
  contentNew: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    marginLeft: 30,
    marginTop: 15,
    fontFamily: 'Monteserrat_700Bold',
    color: '#4f4a4a',
    fontSize: 18
  },
  hotel: {
    flexDirection: 'column'
  },
  imagem: {
    width: 170,
    height: 110,
    borderRadius: 10
  },

  cx: {
    marginTop: 20,
    backgroundColor: 'white',
    width: 200,
    height: 250,
    display: 'flex',
    marginLeft: 18,
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
    marginBottom: 15
  },
  cx1: {
    height: 250
  },
  nome: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    color: '#4f4a4a'
  },
  contentNomeDot: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  novo: {
    color: 'red',
    fontSize: 11,
    fontFamily: 'Montserrat_700Bold'
  },
  descricao: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 9,
    color: '#4f4a4a',

    width: 180,
    marginBottom: 2,
    height: 50
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: 'red',
    marginLeft: 12
  },
  footer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center'
  },
  preco: {
    fontSize: 15,
    fontFamily: 'Montserrat_700Bold'
  }
})
