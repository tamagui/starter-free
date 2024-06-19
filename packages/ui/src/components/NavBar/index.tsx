import React from 'react'
import { XStack, Text } from '@my/ui/src'
import { SolitoImage as Image } from 'solito/image'

export const NavBar: React.FC = () => {
  return (
    <XStack gap={'$5'} marginLeft={60} alignItems="center" marginTop={40}>

      <Image
        src={
          'https://cdn-user.dealerrater.com/images/dealer/18460/employees/2ebb3920a7f6.jpg'
        }
        alt={'sapa'}
        height={100}
        width={100}
        contentFit="fill"
        unoptimized
      />
      <Text fontSize={'$9'} textAlign="center">
        HOME | SEARCH | MANGA LIST
      </Text>
    </XStack>
  )
}
