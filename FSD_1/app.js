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


//    const http = require("http");

//    const server = http.createServer((req, res) => {
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Hello World");
//    });
//    server.listen(3000, () => {
//       console.log("Server running on http://localhost:3000");
//    });
   

const express = require('express');
const app = express();

/* HOME PAGE */
app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
});

/* ABOUT PAGE */
app.get('/about', (req, res) => {
    res.send("Welcome to About Page");
});

/* PROFILE PAGE */
app.get('/profile', (req, res) => {
    res.send("This is Profile Page");
});

/* SERVER START */
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
