import { NativeToast as Toast } from './NativeToast'

let isExpoGo = false
try {
  const Constants = require('expo-constants').default
  const { ExecutionEnvironment } = require('expo-constants')
  isExpoGo = Constants?.executionEnvironment === ExecutionEnvironment?.StoreClient
} catch {
  // not in expo environment
}

export const CustomToast = () => {
  if (isExpoGo) {
    return null
  }
  return <Toast />
}
