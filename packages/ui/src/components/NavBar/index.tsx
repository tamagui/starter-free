import React from 'react'
import { XStack, Text } from '@my/ui/src'
import { SolitoImage as Image } from 'solito/image'

export const NavBar: React.FC = () => {
  return (
    <XStack gap={'$5'} marginLeft={60} alignItems="center" marginTop={40}>
      <Image
        src={
          'https://cdn.discordapp.com/attachments/1219854791254081649/1247730507043705003/image.png?ex=66611716&is=665fc596&hm=5fcd694796a0ee28abcaca6ac1ed13ba4d08bf97bfdc157e265fa087c270c0f8&'
        }
        alt={'sapa'}
        height={100}
        width={100}
        contentFit="fill"
        unoptimized
      />
      <Text fontSize={'$9'} textAlign="center">
        HOME | SEARCH | MANGA LIST{' '}
      </Text>
    </XStack>
  )
}
