import { exec, type ChildProcess } from 'node:child_process'
import { expect, test, afterEach } from 'vitest'
import path from 'node:path'

let buildProcess: ChildProcess | null = null

afterEach(() => {
  if (buildProcess) {
    buildProcess.kill('SIGTERM')
    buildProcess = null
  }
})

test('Next.js build completes', () => {
  return new Promise<void>((resolve, reject) => {
    buildProcess = exec('yarn build', {
      cwd: path.resolve(__dirname, '..'),
    })

    let output = ''
    buildProcess.stdout?.on('data', (data) => {
      output += data.toString()
    })

    buildProcess.stderr?.on('data', (data) => {
      output += data.toString()
    })

    buildProcess.on('close', (code) => {
      if (code === 0) {
        const buildOutput = output
        // Check for yarn build output
        expect(buildOutput).toContain('built @my/config')
        expect(buildOutput).toContain('built @my/ui')

        // Check for Next.js version and build process
        expect(buildOutput).toContain('Next.js 14')
        expect(buildOutput).toContain('Creating an optimized production build')

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

        resolve()
      } else {
        reject(new Error(`Build process exited with code ${code}`))
      }
    })
  })
}, 120000) // Set timeout to 120 seconds
