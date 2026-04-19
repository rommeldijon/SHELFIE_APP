import { SafeAreaView, View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  //For better functionality, instead of using a SafeAreaView, 
  // we can just use a regular View and add padding to it to account for the safe area insets. This is because the SafeAreaView component can cause issues with certain layouts and can be difficult to work with in some cases.
  //when safe is false, we can just return a regular view with the background color set to the theme's background color
  if (!safe) return ( 
    <View 
      style={[{ backgroundColor: theme.background }, style]} 
      {...props} 
    />
  )
  //when safe is true, we need to add padding to the view to account for the safe area insets
  const insets = useSafeAreaInsets()

  return ( 
    <View 
      style={[{ backgroundColor: theme.background, 
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      }, 
        style]} 
      {...props} 
    />
  )
}

export default ThemedView
