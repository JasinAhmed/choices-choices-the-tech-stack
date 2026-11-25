// Start de Enhance dev-server (npm start).
// Op Windows geven sommige terminals (o.a. VS Code) de map door als `c:\...` met
// een kleine letter. De router van Enhance crasht daarop met
// "Missing parameter name at 2", dus we zetten de schijfletter eerst om naar `C:\`.
import { spawn } from 'node:child_process'

const cwd = process.cwd().replace(/^[a-z]:/, (drive) => drive.toUpperCase())
process.chdir(cwd)

const child = spawn('npx enhance dev', { cwd, stdio: 'inherit', shell: true })
child.on('exit', (code) => process.exit(code ?? 0))
