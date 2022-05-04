// todo 子进程
const child_process = require('child_process')
const { spawn } = child_process

const userInput = '.'

const streams = spawn('ls', ['-la', userInput])

streams.stdout.on('data', (chunk) => {
    console.log(chunk.toString())
})