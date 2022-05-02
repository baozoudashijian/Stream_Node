const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    // res其实也是一个流
    const stream = fs.createReadStream('../big_file.txt')
    // stream.pipe(res)
    // .pipe 就是语法糖。
    stream.on('data', (chunk) => {
        res.write(chunk)
    })
    stream.on('end', () => {
        console.log('game over!')
        res.end()
    })
}).listen(8000)
