import { UserDetailScreen } from 'app/features/user/detail-screen'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function Screen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  return (
    <>
      <Stack.Screen
        options={{
          title: 'User',
          presentation: 'modal',
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      <UserDetailScreen id={id as string} />
    </>
  )
}
