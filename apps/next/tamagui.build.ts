import type { TamaguiBuildOptions } from 'tamagui'

export default {
  components: ['tamagui', '@my/ui'],
  config: '../../packages/config/src/tamagui.config.ts',
  outputCSS: './public/tamagui.generated.css',
} satisfies TamaguiBuildOptions
