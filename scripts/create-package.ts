const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const defaultPath = '/packages/'
const defaultPackageName = 'my-package'

function askQuestion(query, defaultValue = '') {
  return new Promise((resolve) => {
    rl.question(query, (input) => {
      resolve(input || defaultValue)
    })
    // Set the default value as the initial input
    rl.write(defaultValue)
  })
}

async function promptUser() {
  let packageName = await askQuestion(
    'Enter the package name e.g. my-package: ',
    defaultPackageName
  )
  if (!packageName) {
    console.error('Package name cannot be empty')
    return promptUser()
  }
  const projectPath = await askQuestion('Enter the path for your new package: ', defaultPath)
  return { packageName, projectPath }
}

function createPackage(packageName, projectPath) {
  const fullPath = path.join(process.cwd(), projectPath, packageName)
  const srcPath = path.join(fullPath, 'src')

  // Create the directory structure
  fs.mkdirSync(srcPath, { recursive: true })

  // Create package.json
  const packageJson = {
    name: packageName,
    version: '1.0.0',
    description: '',
    main: 'dist/index.js',
    types: 'dist/index.d.ts',
    scripts: {
      build: 'tsc',
      test: 'echo "Error: no test specified" && exit 1',
    },
    keywords: [],
    author: '',
    license: 'ISC',
    devDependencies: {
      typescript: '^4.5.4',
    },
  }

  fs.writeFileSync(path.join(fullPath, 'package.json'), JSON.stringify(packageJson, null, 2))

  // Create src/index.ts
  const indexContent = `// ${packageName} main entry point\n\nexport {};\n`
  fs.writeFileSync(path.join(srcPath, 'index.ts'), indexContent)

  // Create tsconfig.json
  const tsconfigJson = {
    compilerOptions: {
      target: 'es5',
      module: 'commonjs',
      declaration: true,
      outDir: './dist',
      strict: true,
      esModuleInterop: true,
    },
    include: ['src/**/*'],
    exclude: ['node_modules', '**/*.spec.ts'],
  }

  fs.writeFileSync(path.join(fullPath, 'tsconfig.json'), JSON.stringify(tsconfigJson, null, 2))

  console.log(`Package ${packageName} created successfully at ${fullPath}!`)
  console.log(`A 'src' directory has been created with an initial index.ts file.`)
  console.log(`Remember to run 'npm install' in the package directory to install TypeScript.`)
}

promptUser()
  .then(({ packageName, projectPath }) => {
    createPackage(packageName, projectPath)
    rl.close()
  })
  .catch(console.error)
