// todo 子进程
const child_process = require('child_process')
const { exec } = child_process

// ls 默认是项目的根目录
// ls ../ 
// ls ./childProcess
exec('ls ./childProcess', (error, stdout, stderr) => {
    console.log(error)
    console.log(stdout)
    console.log(stderr)
})