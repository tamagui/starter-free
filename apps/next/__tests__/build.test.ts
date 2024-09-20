import { execSync } from 'child_process'
import { expect, test } from 'vitest'
import path from 'node:path'

test('Next.js build completes', () => {
  const buildOutput = execSync('yarn build', {
    encoding: 'utf-8',
    cwd: path.resolve(__dirname, '..'),
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

  // Check for specific route patterns
  expect(buildOutput).toContain('○ /')
  expect(buildOutput).toContain('○ /_not-found')
  expect(buildOutput).toContain('ƒ /user/[id]')
  expect(buildOutput).toContain('/_app')
  expect(buildOutput).toContain('/pages-example')
  expect(buildOutput).toContain('/pages-example-user/[id]')

  // Check for chunk information
  expect(buildOutput).toContain('chunks/framework-')
  expect(buildOutput).toContain('chunks/main-')
  expect(buildOutput).toContain('chunks/pages/_app-')

  // Check for static and dynamic route indicators
  expect(buildOutput).toContain('○  (Static)   prerendered as static content')
  expect(buildOutput).toContain('ƒ  (Dynamic)  server-rendered on demand')
})
