import React from 'react'
import { XStack, Stack } from  '@my/ui/src'
import { SolitoImage } from 'solito/image'

export const NavBar: React.FC = () => {
    return (
        <XStack>
            <SolitoImage
            src="https://beatgig.com/image.pndg"
            height={100}
            width={100}
            alt="A cool artist's imdadaage."
            />
        </XStack>
    )
}
