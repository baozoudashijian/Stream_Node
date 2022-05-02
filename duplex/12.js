const { Duplex } = require('stream')

const inoutStream = new Duplex({
    read() {
        const char = String.fromCharCode(this.currentCharCode++)
        console.log(`这次push的内容是${char}`)
        this.push(char)
        if(this.currentCharCode > 90) {
            this.push(null)
        }
    },
    write(chunk, encoding, callback) {
        console.log(chunk.toString())
        callback()
    }
})
inoutStream.currentCharCode = 65
// pipe的顺序不知道是什么情况
// 1. 谁快谁先执行
// 2. 有可能是按顺序执行，只是我不可能很快速在控制台输入内容
process.stdin.pipe(inoutStream).pipe(process.stdin)