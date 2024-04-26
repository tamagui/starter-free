import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/navigation'

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
      <YStack gap="$4" bc="$background">
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>
        <Separator />
        <Paragraph ta="center">
          This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <>
          {Platform.OS === 'web' && pagesMode ? (
            <>
              <Separator />
              <Paragraph ta="center">
                Note this page is using the <code>Next.js Pages Router</code> mode.
              </Paragraph>
              <Anchor ta="center" color="$color12" href="/">
                Go to the app router example
              </Anchor>
            </>
          ) : null}
          {Platform.OS === 'web' && !pagesMode ? (
            <>
              <Separator />
              <Paragraph ta="center">
                Note this page is using the <code>Next.js App Router</code> mode.
              </Paragraph>
              <Anchor ta="center" color="$color12" href="/pages-example">
                Go to the pages router example
              </Anchor>
            </>
          ) : null}
        </>
        <Separator />
        <Paragraph ta="center">
          Made by{' '}
          <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
            @natebirdman
          </Anchor>
          ,{' '}
          <Anchor
            color="$color12"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>

      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              // Custom Toast only works on Expo
              if (Platform.OS !== 'web') {
                toast.show('Sheet closed!', {
                  message: 'Just showing how toast works...',
                })
              }
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
