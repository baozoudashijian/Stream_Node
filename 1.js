const fs = require('fs')
const stream = fs.createWriteStream('./big_file.txt')

for(let i = 0; i < 100000; i++) {
    stream.write(`这是第${i}条数据，我们需要很多很多数据，你懂吗\n`)
}
stream.end()