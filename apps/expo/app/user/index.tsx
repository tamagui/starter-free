import { UserScreen } from 'app/features/user/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'User',
        }}
      />
      <UserScreen />
    </>
  )
}
