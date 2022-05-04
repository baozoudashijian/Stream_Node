const child_process = require('child_process')
const { fork } = child_process
const path = require('path')

const n = fork(path.join(__dirname, '/child.js'))
// const n = fork('./child.js') // 报错，这个路径一直是个问题啊。

n.on('message', (msg) => {
    console.log(msg, 'msg')
})

setTimeout(() => {
    n.send({name: 'elson'})
}, 3000)
