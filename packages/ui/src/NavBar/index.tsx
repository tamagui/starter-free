import React from 'react'
import { XStack, Stack } from  '@my/ui/src'
import { SolitoImage as Image } from 'solito/image'

export const NavBar: React.FC = () => {
    return (
        <XStack>
                <Image src={'https://via.placeholder.com/150'}
                    height={20}
                    width={20}
                    fill/>
        </XStack>
    )
}
