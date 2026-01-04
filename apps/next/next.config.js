/** @type {import('next').NextConfig} */
module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [
    'solito',
    'react-native-web',
    '@tamagui/react-native-svg',
    'expo-linking',
    'expo-constants',
    'expo-modules-core',
  ],
  experimental: {
    scrollRestoration: true,
  },
  turbopack: {
    resolveAlias: {
      // Only alias react-native (not react-native-web) since RNW 0.21.2 is React 19 compatible
      'react-native': 'react-native-web',
      'react-native-svg': '@tamagui/react-native-svg',
      // Stub for next/head to support @tamagui/next-theme with Next.js 16 app router
      'next/head': './lib/next-head-stub.tsx',
    },
  },
}
