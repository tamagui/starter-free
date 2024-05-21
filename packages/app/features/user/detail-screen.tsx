import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
// if using app router
import { useParams, useRouter } from 'solito/navigation'

// if using pages router
// import { createParam } from 'solito'
// import { useLink } from 'solito/link'

// if using app router
const useUserParams = useParams<{ id: string }>

// if using pages router
// const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  // if using app router
  const { id } = useUserParams()
  const router = useRouter()

  // if using pages router
  // const [id] = useParam('id')
  // const link = useLink({
  //   href: '/',
  // })

  return (
    <YStack f={1} jc="center" ai="center" gap="$4">
      <Paragraph ta="center" fow="700" col="$blue10">{`User ID: ${id}`}</Paragraph>
      {/* // if using app router */}
      <Button icon={ChevronLeft} onPress={() => router.back()}>
        Go Home
      </Button>
      {/* // if using pages router
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button> */}
    </YStack>
  )
}
