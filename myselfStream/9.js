const { Readable } = require('stream')

const inStream = new Readable()
inStream.push('123')
inStream.push('456')
inStream.push('789')
inStream.push(null)

inStream.pipe(process.stdin)