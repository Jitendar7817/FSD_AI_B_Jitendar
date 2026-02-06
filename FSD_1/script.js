   // const fs = require('node:fs')

   // fs.writeFile("myfile.txt", "ai-b class mein welcome hai sir",
   //    function(err){
   //       if(err) console.error(err);
   //       else console.log("no error");
   //    }
   // )  

   // fs.appendFile("myfile.txt", " next append data",
   //    function(err){
   //       if(err) console.error(err);
   //       else console.log("no error");
   //    }
   // )

   // fs.rename("myfile.txt","newfile.txt",function(err){
   //    if(err) console.error(err);
   //    else console.log("file.renamed");
   // })

   // fs.copyFile("newfile.txt","./anotherfile.txt",
   //    function(err){
   //       if(err) console.error(err);
   //       else console.log("no error")
   //    }
   // )

// const http = require("http");

// const server = http.createServer((req, res) => {
//    res.writeHead(200, { "Content-Type": "text/plain" });
//    res.end("Hello World");
// });
// server.listen(3000, () => {
//    console.log("Server running on http://localhost:3000");
// });
const express = require('express');
const app = express();

// Route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
