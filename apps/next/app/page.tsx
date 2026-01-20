'use client'

import { HomeScreen } from 'app/features/home/screen'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return <HomeScreen onLinkPress={() => router.push('/user/nate')} />
}
