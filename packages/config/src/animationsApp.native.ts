import { createAnimations } from '@tamagui/animations-react-native'
import { animationsReactNative } from '@tamagui/config/v5-rn'

export const animationsApp = createAnimations({
  ...animationsReactNative.animations,
  // ... your extra animations
})
