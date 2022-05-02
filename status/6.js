const fs = require('fs')

const s = fs.createReadStream('../big_file.txt')
// 异步代码
s.on('data', (chunk) => {
    console.log(chunk)
})
s.pause()
setTimeout(() => {
    s.resume()
}, 3000)
s.on('end', () => {
    console.log('game over!')
})