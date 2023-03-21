import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Touchable,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native'

export default function Indication() {
  const [indicacoes, setIndicacoes] = useState([
    {
      foto: 'https://static.ifood-static.com.br/image/upload/t_high/logosgde/988362fa-e363-42ec-bf51-b3297d2f71af/202203151003_Em16_i.jpg',
      nome: 'Oushe Burguer',
      key: '1'
    },
    {
      foto: 'https://static.ifood-static.com.br/image/upload/t_high/logosgde/fd470c80-ba8f-46b4-9425-781cc6ce940e/202203212150_kzgx_.jpeg',
      nome: 'La Pizza',
      key: '2'
    },
    {
      foto: 'https://static-images.ifood.com.br/image/upload/t_medium/logosgde/56fc6f36-7aa4-4a4a-9885-9f00147dd64b/202104300041_Qr7F_.jpeg',
      nome: 'Hangos Food',
      key: '3'
    }
  ])

  return (
    <FlatList
      numColumns={4}
      keyExtractor={item => String(item.key)}
      data={indicacoes}
      renderItem={({ item }) => <ListItem data={item} />}
    />
  )
  function ListItem({ data }) {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <View>
            <Image
              source={{ uri: data.foto }}
              style={{ width: 60, height: 50, borderRadius: 10 }}
            />
          </View>
          <View>
            <Text style={styles.nome}>{data.nome}</Text>
            <View style={styles.botao}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Montserrat_500Medium'
                }}
              >
                Visitar
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 170,
    marginLeft: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 12,
    backgroundColor: '#fff',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 15
  },
  nome: {
    fontSize: 12,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 7
  },
  botao: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 70,
    marginLeft: 7,
    display: 'flex',
    alignItems: 'center'
  }
})
