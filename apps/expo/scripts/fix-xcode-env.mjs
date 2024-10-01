import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const iosDir = path.join(__dirname, '..', 'ios')
const xcodePath = path.join(iosDir, '.xcode.env.local')

async function main() {
  try {
    // Create ios directory if it doesn't exist
    await fs.mkdir(iosDir, { recursive: true })

    // Get the path to the Node binary
    const nodePath = process.execPath

    // Create or update the .xcode.env.local file
    const content = `export NODE_BINARY=${nodePath}\n`
    await fs.writeFile(xcodePath, content)
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

main()
