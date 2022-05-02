const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    // res其实也是一个流
    const stream = fs.createReadStream('../big_file.txt')
    stream.pipe(res)
}).listen(8000)
