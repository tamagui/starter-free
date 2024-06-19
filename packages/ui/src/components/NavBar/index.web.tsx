import React from 'react'
import { XStack, Text } from '@my/ui/src'
import { SolitoImage as Image } from 'solito/image'

export const NavBar: React.FC = () => {
  return (
    <XStack
      marginLeft={60}
      marginTop={30}
      alignItems="center"
      width={'95%'}
      justifyContent="space-between"
    >
      <XStack alignItems="center" gap={'$5'}>
        <Image
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCMd_DXbWYISW6hO57pSpCntDtZy1Foly2A&s'
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
      <Text fontSize={24} color={'#FF204E'}>
        Hi, Pablo Peñaranda
      </Text>
    </XStack>
  )
}
