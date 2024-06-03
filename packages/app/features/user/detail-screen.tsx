import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useParams, useRouter } from 'solito/navigation'

export function UserDetailScreen() {
  const router = useRouter()
  const { id } = useParams()

  return (
    <YStack f={1} jc="center" ai="center" gap="$4" bg="$background">
      <Paragraph ta="center" fow="700" col="$blue10">{`User ID: ${id}`}</Paragraph>
      <Button icon={ChevronLeft} onPress={() => router.back()}>
        Go Home
      </Button>
    </YStack>
  )
}
