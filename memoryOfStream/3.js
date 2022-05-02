const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    const stream = fs.createReadStream('../big_file.txt')
    stream.pipe(res)
}).listen(8000)
