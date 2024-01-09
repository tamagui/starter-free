// import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'

import {
  Paragraph,
  YStack,
} from '@my/ui'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <YStack>
        <Paragraph>
          test
        </Paragraph>
      </YStack> 
    </>
  )
}
