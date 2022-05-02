const fs = require('fs')
const stream = fs.createWriteStream('./createWriteStream/big_file.txt')

for(let i = 0; i < 100000; i++) {
    stream.write(`这是第${i}条数据，我得意的笑，我得意的笑\n`)
}
console.log('create')
stream.end()