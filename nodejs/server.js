const http = require("http");
const fs = require ("fs");//為了要讀取服務器裡的文件，導入fs模塊=file system 可使用fs.readfile讀取html文件
const sendResponse = (filename,statusCode,response)=>
{
fs.readFile(`./html/${filename}`,(error,data)=>//注意要點在./之後要輸入正確資料夾的位置,像原本存放位置之前有多一個資料夾結果就會報錯
{
    if (error)//仙藥判斷是否error
    {
    response.statusCode= 500;
    response.setHeader("Content-Type","text/plain");
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
{  console.log(request.url,request.method);//(request.url 告知node 後端程序用戶想要法問哪個頁面,method請求方法)
    
    const method = request.method;
    const url = request.url;

if(method ==="GET")//判斷METHOD
{
    if(url==="/")//"/"=>判斷跟目錄也就是主頁的意思
    {
      sendResponse("index.html",200,response);
    }

    else if(url==="/about.html") 
    { 
        sendResponse("about.html",200,response);
     }

else
{
sendResponse("404.html",404,response)
}
}
else
{

}

   
})
;


const port = 3000;

const ip = "127.0.0.1";

server.listen(port ,ip,()=>
{
console.log(`server is running at http://${ip}:${port}`);

}
);
