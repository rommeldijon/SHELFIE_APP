import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from "../constants/Colors"

const About = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.title, {color: theme.title}]}>About Page</Text>

      <Link href="/" style={[styles.link, {color: theme.text}]}>Home Page</Link>
    </View>
  )
}

export default About

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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  }
})