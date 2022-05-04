const { Writable } = require('stream')
const fs = require('fs')

function writeOneMillionTimes(writer, data) {
    let i = 100000;
    write();
    function write() {
      let ok = true;
      do {
        i--;
        if (i === 0) {
          // 最后 一次
          writer.write(data);
        } else {
          // 检查是否可以继续写入。 
          // 这里不要传递 callback， 因为写入还没有结束！ 
          ok = writer.write(data);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        // 不得不提前停下！
        // 当 'drain' 事件触发后继续写入  
        writer.once('drain', write);
        writer.on('drain', () => {
            console.log('drain')
        })
      }
    }
  }

  writeOneMillionTimes(new Writable({
    write(chunk, encoding, callback) {
        fs.appendFile('./oneMillionTimes.txt', chunk.toString(), (err) => {
            callback()
        })
    }
  }), '这是一个晴朗的早晨\n')