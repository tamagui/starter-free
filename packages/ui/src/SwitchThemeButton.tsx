import { Button, useIsomorphicLayoutEffect } from 'tamagui'
import { useThemeSetting } from '@tamagui/next-theme'
import { useState } from 'react'

export const SwitchThemeButton = () => {
  const themeSetting = useThemeSetting()
  const [clientTheme, setClientTheme] = useState<string>('dark')

  useIsomorphicLayoutEffect(() => {
    setClientTheme(themeSetting.current || 'dark')
  }, [themeSetting.current, themeSetting.resolvedTheme])

  return <Button onPress={themeSetting.toggle}>Change theme: {clientTheme}</Button>
}
