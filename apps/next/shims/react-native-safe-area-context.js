// web shim for react-native-safe-area-context
// the sheet component uses this for safe area insets but has fallbacks on web

export const initialWindowMetrics = null

export const SafeAreaView = ({ children, ...props }) => {
  const { createElement } = require('react')
  const { View } = require('react-native-web')
  return createElement(View, props, children)
}

export const SafeAreaProvider = ({ children }) => children

export const useSafeAreaInsets = () => ({ top: 0, right: 0, bottom: 0, left: 0 })

export const useSafeAreaFrame = () => ({ x: 0, y: 0, width: 0, height: 0 })

export const SafeAreaInsetsContext = null
export const SafeAreaFrameContext = null
