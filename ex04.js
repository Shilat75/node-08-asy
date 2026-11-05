// Exercise 4: Random Line from File
// Goal: read quotes.txt using a callback, split it into lines, ignore empty lines and print a random one.
// Required: fs.readFile(filePath, callback)
//
// Expected output (random on each run):
//   Random Line: Stay positive.
//
// Run: node ex04.js

const { randomFillSync } = require("crypto");
const fs = require("fs");
const path = require("path");


const filePath = path.join(__dirname, "quotes.txt");
fs.readFile(filePath,"utf8", (error,data)=>{
    if (error){
        console.log(error.message);
        return;
    }
   const lines = data.split("\n");
   const validLines = lines.filter(line => line.trim() !== "");
   const index=Math.floor(Math.random()*validLines.length);
   console.log(`Random Line: ${validLines[index]}`);
    
})
// write your code here
