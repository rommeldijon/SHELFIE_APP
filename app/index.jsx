import { StyleSheet, Text, View, Image, LogBox } from 'react-native'
import React from 'react'
import Logo from '../assets/img/logo.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30}}>
        Reading List App
      </Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  img: {
    marginVertical: 20,
    maxWidth: 100,
    height: 100,
  },
})