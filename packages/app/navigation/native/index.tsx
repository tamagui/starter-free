import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import {  useTheme } from '@my/ui'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
}>()

export function NativeNavigation(){
  const theme = useTheme()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTintColor: theme.color.val,
          headerStyle: { backgroundColor: theme.black3.val },
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
          presentation:"modal",
          animation: "slide_from_right",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTintColor: theme.color.val,
          headerStyle: { backgroundColor: theme.blue9.val },
        }}
      />
    </Stack.Navigator>
  )
}
