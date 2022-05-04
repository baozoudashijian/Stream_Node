// todo 子进程
const child_process = require('child_process')
const { execFile } = child_process

const userInput = '.'

const streams = execFile('ls', ['-la', userInput])

streams.stdout.on('data', (chunk) => {
    console.log(chunk)
})