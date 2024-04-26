import React from 'react'
import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useLink } from 'solito/navigation'

export function UserDetailScreen({ id }: { id: string }) {
  const link = useLink({
    href: '/',
  })

  return (
    <YStack f={1} jc="center" ai="center" gap="$4">
      <Paragraph ta="center" fow="700">{`User ID: ${id}`}</Paragraph>
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
