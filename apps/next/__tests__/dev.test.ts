import { spawn } from 'node:child_process'
import { expect, test } from 'vitest'
import path from 'node:path'

test('Next.js dev server starts and serves the expected content', async () => {
  const devProcess = spawn('yarn', ['dev'], {
    cwd: path.resolve(__dirname, '..'),
    stdio: 'pipe',
    shell: true,
  })

  let output = ''
  let url: string | null = null

  devProcess.stdout.on('data', (data) => {
    output += data.toString()
    // Parse the URL from the output
    const match = data.toString().match(/Local:\s+(https?:\/\/\S+)/i)
    if (match && match[1]) {
      url = match[1].trim()
    }
  })

  try {
    // Wait for the server to start and URL to be parsed
    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Timeout waiting for dev server to start'))
      }, 30000)

      devProcess.stdout.on('data', (data) => {
        if (data.toString().includes('Ready in') && url) {
          clearTimeout(timeout)
          resolve()
        }
      })
    })

    // Check for expected output
    expect(output).toContain('Next.js 14')
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
    // Ensure the dev server is killed
    devProcess.kill()

    // Wait for the process to fully terminate
    await new Promise<void>((resolve) => {
      devProcess.on('exit', () => {
        resolve()
      })
    })
  }
}, 60_000) // Timeout set to 60 seconds
