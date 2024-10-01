import { spawn, type ChildProcess } from 'node:child_process'
import { expect, test, afterAll } from 'vitest'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let devProcess: ChildProcess | null = null

afterAll(() => {
  if (devProcess) {
    devProcess.kill()
  }
})

test('Next.js dev server starts and serves the expected content', async () => {
  const nextAppDir = path.resolve(__dirname, '..')
  devProcess = spawn('yarn', ['dev'], {
    cwd: nextAppDir,
    stdio: 'pipe',
    shell: true,
    env: { ...process.env, FORCE_COLOR: '0' },
  })

  let output = ''
  let url: string | null = null

  devProcess.stdout?.on('data', (data) => {
    output += data.toString()
    // Parse the URL from the output
    const match = data.toString().match(/Local:\s+(https?:\/\/\S+)/i)
    if (match && match[1]) {
      url = match[1].trim()
    }
  })

  devProcess.stderr?.on('data', (data) => {
    output += data.toString()
    // Log errors or warnings
    console.error('Dev server error:', data.toString())
    // Potentially check for specific error conditions
    if (data.toString().includes('EADDRINUSE')) {
      console.error('Port is already in use. Please free up the port and try again.')
    }
    devProcess?.kill()
  })

  try {
    // Wait for the server to start and URL to be parsed
    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        if (devProcess) {
          devProcess.kill()
        }
        reject(new Error('Timeout waiting for dev server to start'))
      }, 30000)

      devProcess?.stdout?.on('data', (data) => {
        if (data.toString().includes('Ready in') && url) {
          clearTimeout(timeout)
          resolve()
        }
      }) ?? console.warn('stdout is null')
    })

    // Check for expected output
    expect(output).toContain('Next.js')
    expect(output).toContain('Local:')
    expect(output).toContain('Ready in')

    // Ensure URL was parsed
    expect(url).not.toBeNull()

    // Make a request to the dev server
    const response = await fetch(url!)
    const html = await response.text()

    // Check for "Welcome to Tamagui" in the response
    expect(html).toContain('Welcome to Tamagui')
  } finally {
    // Remove the process killing logic from here
    // as it will be handled by afterAll
  }
}, 60_000) // Timeout set to 60 seconds
