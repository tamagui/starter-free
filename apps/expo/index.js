import { Platform } from 'react-native'

// workaround for EXPO_OS not being inlined by babel-preset-expo
// see: https://github.com/expo/expo/issues/33440
if (typeof process !== 'undefined' && process.env && !process.env.EXPO_OS) {
  process.env.EXPO_OS = Platform.OS
}

import { registerRootComponent } from 'expo'
import { ExpoRoot } from 'expo-router'
import React from 'react'

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context('./app')
  return <ExpoRoot context={ctx} />
}

registerRootComponent(App)
