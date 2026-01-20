'use client'

import { useState } from 'react'
import { useColorScheme } from 'react-native'
import { Button, useIsomorphicLayoutEffect } from 'tamagui'

export const SwitchThemeButton = () => {
  const colorScheme = useColorScheme()
  const [clientTheme, setClientTheme] = useState<string>('light')

  useIsomorphicLayoutEffect(() => {
    setClientTheme(colorScheme || 'light')
  }, [colorScheme])

  // on native, theme switching isn't as simple - this is a placeholder
  // you would need to implement proper theme context switching
  return <Button onPress={() => {}}>{`Theme: ${clientTheme}`}</Button>
}
