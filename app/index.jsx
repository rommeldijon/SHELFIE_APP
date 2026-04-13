import { StyleSheet, Text, View, Image, LogBox } from 'react-native'
import { Link } from 'expo-router'

import Logo from '../assets/img/logo.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30}}>
        Reading List App
      </Text>

      <Link href="/about" style={styles.link}>
        About Page
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact Page
      </Link>
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
   link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  }
})