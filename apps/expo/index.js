import 'setimmediate'

if (!global?.setImmediate) {
  global.setImmediate = setTimeout
}

import 'expo-router/entry'
