const http = require("http");
const fs = require("fs");
const path = require("path")
const promisify = require("util").promisify;

const mk_path_dir = require("mk_path666").dir;
const p_mk_path_dir = promisify(mk_path_dir);

function download(start,end){
    for (let i = start ; i <= end ; i++) {

        http.get(`http://www.kanunu8.com/book/${i}/index.html `,async function(res) {
              if(res.statusCode !== 200) return null;

              /*生成存储文件的目录*/
              try{
                  await p_mk_path_dir(`./downloads/book/${i}`)
              }catch(e){
                  throw e
              }

              console.log(`getting book ${i}`)
              const ws = fs.createWriteStream(path.normalize(`./downloads/book/${i}/index.html`))
              res.on('data', function(chunk){
                ws.write(chunk)
              });
              res.on('end', function(){
                  ws.end()
                  console.log(`done book ${i}`)
              });
        }).on('error', function(e) {
          console.log(e)
          //console.log("Got error: " + e.message);
        });
    }
}

//download(5000,5200);  
/*
成功下载文件
*/

//download(5000,6000);  
/*
成功下载文件
*/

download(3555,6666);
/*
该下载的都下载了，但是抛出很多错误异常。
{ Error: read ECONNRESET
    at _errnoException (util.js:1021:11)
    at TCP.onread (net.js:608:25) code: 'ECONNRESET', errno: 'ECONNRESET', syscall: 'read' }

    也不知道什么错误，但是内容确实下载下来了。
*/

setTimeout(()=>{},222222222)
  
