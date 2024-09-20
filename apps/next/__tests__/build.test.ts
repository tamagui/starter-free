import { execSync } from 'child_process'
import { expect, test } from 'vitest'

test('Next.js build completes successfully', () => {
  const buildOutput = execSync('yarn build', {
    encoding: 'utf-8',
    cwd: process.cwd(),
  })

  // Check for yarn build output
  expect(buildOutput).toContain('built @my/config')
  expect(buildOutput).toContain('built @my/ui')
  expect(buildOutput).toContain('Welcome to Tamagui!')

  // Check for Next.js version and build process
  expect(buildOutput).toContain('Next.js 14')
  expect(buildOutput).toContain('Creating an optimized production build')

  // Check for Tamagui build output
  expect(buildOutput).toContain('[tamagui] built config and components')

  // Check for route information
  expect(buildOutput).toContain('Route (app)')
  expect(buildOutput).toContain('Route (pages)')
  expect(buildOutput).toContain('First Load JS shared by all')

  // Check for static and dynamic route indicators
  expect(buildOutput).toContain('○  (Static)   prerendered as static content')
  expect(buildOutput).toContain('λ  (Dynamic)  server-rendered on demand using Node.js')

  // Check for build completion
  expect(buildOutput).toContain('Compiled successfully')
  expect(buildOutput).toContain('Done in')
})
