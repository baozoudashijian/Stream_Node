setTimeout(() => {
    process.send({hello: 'world!'})
}, 2000)

process.on('message', (msg) => {
    console.log(msg, 'msg')
})