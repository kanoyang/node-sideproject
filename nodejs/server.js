const http = require("http");
const fs = require ("fs");//為了要讀取服務器裡的文件，導入fs模塊=file system 可使用fs.readfile讀取html文件
const sendResponse = (filename,statusCode,response)=>
{
fs.readFile(`./html/${filename}`,(error,data)=>
{
    if (error)
    {
    response.statusCode= 500;
    response.setHeader("Content-Type","text/plain")
    response.end("sorry internal erroe");
    }
    else{

    response.statusCode = statusCode;
    response.setHeader("Content-Type","text/html");
    response.end(data);   
        }

});
};

const server = http.createServer((request,response)=>
{  console.log(request.url,request.method);

    const method = request.method;
    const url = request.url;

if(method ==="GET")
{
    if(url==="/"){}
    else if(url==="/about.html") {  }

}
else
{




}



    response.end("hellow from nodejs server !");
}
);


const port = 3000;

const ip = "127.0.0.1";

server.listen(port ,ip,()=>
{
console.log(`server is running at http://${ip}:${port}`);

}
);
