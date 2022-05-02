const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    // .on方法继承Stream.prototype
    // on('data') 也是继承Stream
    // 接受到数据.pipe(request)
    fs.readFile('../big_file.txt', (err, data) => {
        if(err) {
            console.log(err) 
            return false
        }
        res.end(data)
    })
}).listen(8000)
