const { Readable } = require('stream')

const inStream = new Readable({
    read() {
        const char = String.fromCharCode(this.currentCharCode++)
        console.log(`这次push的内容是${char}`)
        this.push(char)
        if(this.currentCharCode > 90) {
            this.push(null)
        }
    }
})

inStream.currentCharCode = 65
inStream.pipe(process.stdin)