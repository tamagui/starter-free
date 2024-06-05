import { UserScreen } from 'app/features/user/screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <UserScreen />
    </>
  )
}
