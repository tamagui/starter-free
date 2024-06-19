import React from 'react'
import { NavBar } from '@my/ui/src/components/NavBar'
import { YStack, XStack, Text, ZStack, Button, Stack } from '@my/ui'
import { SolitoImage as Image } from 'solito/image'
import { X } from '@tamagui/lucide-icons'

export const HomeScreen: React.FC = () => {
  return (
    <YStack width={'100%'} backgroundColor={'#1B1D24'} flexGrow={1} overflow="hidden">
      <Text fontSize={40} width={'100%'} padding={20} color={'#FF204E'} textAlign="center">
        MANGAVERSE
      </Text>

      <ZStack width={'100%'} backgroundColor={'#1B1D24'} flex={1}>
        <XStack height={'60%'}>
          <Stack height={'100%'} width={'70%'}>
            <Image
              src={'https://pbs.twimg.com/media/F7O0IBGWsAAplo1?format=jpg'}
              alt={'manga-cover'}
              contentFit="cover"
              fill
              unoptimized
              style={{ opacity: 0.2 }}
            />
          </Stack>
        </XStack>

        <YStack width={'100%'} zIndex={999_999}>
          <NavBar />
          <YStack alignSelf="flex-end" width={'40%'} marginRight={30}>
            <Text fontSize={'$10'} color={'#ffffff'} textAlign="right">
              Manga name
            </Text>
            <Text fontSize={'$5'} color={'#ffffff'} textAlign="right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua ut enim ad.
            </Text>
            <Button
              size="$4"
              backgroundColor={'#FF204E'}
              width={'30%'}
              alignSelf="flex-end"
              marginTop={20}
            >
              Read
            </Button>
          </YStack>
        </YStack>
      </ZStack>
    </YStack>
  )
}
