const http = require("http");
const fs = require("fs");
const path = require("path")
const promisify = require("util").promisify;

const p_access = promisify(fs.access);
const p_mkdir = promisify(fs.mkdir);

function download(start,end){
    
    for (let i = start ; i <= end ; i++) {
      http.get(`http://www.kanunu8.com/book/4430/${i}.html `, function(res) {
            console.log(`getting ${i}.html`)
            let dataBuf = null
            res.on('data', function(chunk){
              dataBuf += chunk
              //以后再这里重构
            });
            res.on('end', function(){
                fs.writeFile(path.join("./downloads/book/4430/",`${i}.html`),dataBuf, (err) => {
                    if (err) throw err;
                    console.log(`done ${i}.html`)
                  });
                console.log(`wirting ${i}.html`)
            });
      }).on('error', function(e) {
        console.log("Got error: " + e.message);
      });
    }
}

(async function(){
  try{
    await p_mkdir("./downloads")
  }catch(e){}

  try{
    await p_mkdir("./downloads/book")
  }catch(e){}

  try{
    await p_mkdir("./downloads/book/4430")
  }catch(e){}

  download(55262,55295);
  
})();

setTimeout(()=>{},1111111111);