import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import StarReview from 'react-native-stars'

import React from 'react'
import SwiperComponents from '../components/swiper'
export default function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponents />
      </View>
      <View style={styles.header}>
        <View style={{ width: '65%' }}>
          <Text style={styles.nome}>Hotel São Francisco</Text>
        </View>
        <View style={{ width: '35%' }}>
          <Text style={styles.avaliacoes}>Avaliações</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <StarReview
              default={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={
                <Ionicons name="md-star" size={24} style={styles.star} />
              }
              emptyStar={
                <Ionicons
                  name="md-star-outline"
                  size={24}
                  style={styles.star}
                />
              }
              halfStar={
                <Ionicons name="md-star-half" size={24} style={styles.star} />
              }
            />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.valor}>R$ 150,00</Text>
      </View>
      <View style={styles.desc}>
        <Text
          style={{
            fontFamily: 'Montserrat_500Medium',
            fontSize: 12,
            color: '#4f4a4a'
          }}
        >
          O Hotel São Francisco é uma excelente opção para pessoas que visitam
          Penedo, oferecendo um ambiente familiar e várias comodidades que vão
          tornar a sua estadia mais especial.
        </Text>
      </View>

      <ScrollView
        style={styles.ScrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.slide}>
          <Image
            style={{ width: 150, height: 100, borderRadius: 10 }}
            source={{
              uri: 'https://www.hotelsaofrancisco.tur.br/images/galeria/externa/1%20(4).jpg'
            }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={{ width: 150, height: 100, borderRadius: 10 }}
            source={{
              uri: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_360,q_auto,w_360/itemimages/47/68/4768106_v1.jpeg'
            }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={{ width: 150, height: 100, borderRadius: 10 }}
            source={{
              uri: 'https://hotel-sao-francisco-penedo.ibooked.com.br/data/Photos/OriginalPhoto/4036/403655/403655136/Hotel-Sao-Francisco-Penedo-Exterior.JPEG'
            }}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  swiperContent: {
    flexDirection: 'row',
    height: 340,
    width: '100%'
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginTop: 20
  },
  nome: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a'
  },
  avaliacoes: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 10,
    marginLeft: 28
  },
  star: {
    color: '#E7A74E',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  valor: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 3
  },
  desc: {
    marginLeft: 20,
    width: '90%',
    marginTop: 2
  },
  slide: {
    marginLeft: 20,
    marginTop: 25
  }
})
