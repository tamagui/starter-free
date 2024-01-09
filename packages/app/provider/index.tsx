import { CustomToast, TamaguiProvider, TamaguiProviderProps, ToastProvider, config } from '@my/ui'
import { useColorScheme } from 'react-native'

import { ToastViewport } from './ToastViewport'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme()
  return (
    <TamaguiProvider
    config={config}
    disableInjectCSS
    defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
    {...rest}
    >
      {children}
    </TamaguiProvider>
  )
}
