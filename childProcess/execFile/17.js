// todo 子进程
const child_process = require('child_process')
const { execFile } = child_process

const userInput = '.'

execFile('ls', ['-la', userInput], (err,stdout) => {
    console.log(err)
    console.log(stdout)
})