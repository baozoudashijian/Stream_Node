const { Readable } = require('stream')

const inStream = new Readable()
inStream.push('123')
inStream.push('456')
inStream.push('789')
inStream.push(null)

inStream.on('data', (chunk) => {
    process.stdin.write(chunk)
    console.log('打印出数据了')
})

inStream.on('end', () => {
    console.log('完成任务！')
})