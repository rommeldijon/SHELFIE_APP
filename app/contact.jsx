import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>

      <Link href="/" style={ styles.link}>
        Home Page
      </Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0dfe8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
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