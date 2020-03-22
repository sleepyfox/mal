// STEP 0 - REPL skeleton

const readline = require("readline");

const READ = (x) => x
const EVAL = (x) => x
const PRINT = (x) => x
const rep = (x) => PRINT(EVAL(READ(x)))

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'user> '
})

rl.prompt()

rl.on('close', () => {
  console.log('Ending session.')
  process.exit(0)
})

rl.on('line', (line) => {
  console.log(rep(line.trim()))
  rl.prompt()
})
