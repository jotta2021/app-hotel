import { View, Text, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import React from 'react'
export default function SwiperComponents() {
  return (
    <Swiper
      style={styles.swiper}
      dotStyle={{
        borderColor: 'black',
        backgroundColor: 'black',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10
      }}
      activeDotColor="white"
      activeDotStyle={{
        borderColor: 'black',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10
      }}
    >
      <View>
        <Image
          style={{ width: ' 100%', height: 350 }}
          source={{
            uri: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/100292064.jpg?k=28ae106560e1b75bfeca6bbda11c4a79ff53d6e1ef71f8040bf319d352cc80fc&o=&hp=1'
          }}
        />
      </View>
      <View>
        <Image
          style={{ width: ' 100%', height: 350 }}
          source={{
            uri: 'https://www.hotelsaofrancisco.tur.br/images/master/master1/1%20(2).jpg'
          }}
        />
      </View>
      <View>
        <Image
          style={{ width: ' 100%', height: 350 }}
          source={{
            uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/89725774.jpg?k=c676d1e95505783b1218d8da124fcaa366480b8bac7a12d2985cd42b11829527&o='
          }}
        />
      </View>
    </Swiper>
  )
}

const styles = StyleSheet.create({})
