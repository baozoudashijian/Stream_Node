// todo 子进程
const child_process = require('child_process')
const { exec } = child_process

const stream = exec('ls')
stream.stdout.on('data', (chunk) => {
    console.log('-------')
    console.log(chunk)
})