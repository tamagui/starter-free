import { spawn } from 'child_process'
import { expect, test } from 'vitest'
import path from 'node:path'

test('Next.js dev server starts', async () => {
  const devProcess = spawn('yarn', ['dev'], {
    cwd: path.resolve(__dirname, '..'),
    stdio: 'pipe',
    shell: true,
  })

  let output = ''
  devProcess.stdout.on('data', (data) => {
    output += data.toString()
  })

  try {
    // Wait for the server to start (adjust timeout as needed)
    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Timeout waiting for dev server to start'))
      }, 30000)

      devProcess.stdout.on('data', (data) => {
        if (data.toString().includes('Ready in')) {
          clearTimeout(timeout)
          resolve()
        }
      })
    })

    // Check for expected output
    expect(output).toContain('Welcome to Tamagui!')
    expect(output).toContain('Next.js 14')
    expect(output).toContain('Local:')
    expect(output).toContain('Ready in')

    // Additional checks can be added here
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
}, 30_000)
