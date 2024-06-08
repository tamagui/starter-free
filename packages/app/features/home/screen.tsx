import React from 'react'
import { NavBar } from '@my/ui/src/components/NavBar'
import { YStack, Text } from '@my/ui'

export const HomeScreen: React.FC = () => {
  return (
    <YStack width={'100%'} backgroundColor={'#1B1D24'} flex={1}>
      <NavBar />
      <YStack width={'100%'} alignItems="flex-end">
        <Text fontSize={'$8'} fontWeight={'700'} paddingRight={50}>
          Manga name
        </Text>
        <Text fontSize={18} width={'40%'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua ut enim ad.
        </Text>
      </YStack>
    </YStack>
  )
}
