/** @format */

const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
 if (req.url === "/") {
  res.write("<html>");
  res.write(
   "<body><form method='POST' action='/message'><input type='text' name='message'><button type='submit'>Submit</button></form></body>"
  );
  res.write("<html>");
  return res.end();
 }

 if (req.url === "/message" && req.method === "POST") {
  const body = [];
  req.on("data", (chunk) => {
   body.push(chunk);
   console.log(chunk);
  });
  req.on("end", () => {
   const bodyString = Buffer.concat(body).toString();
   const message = bodyString.split("=")[1];
   console.log(message);
   console.log(bodyString);
   fs.writeFileSync("req.txt", message);
  });
  res.statusCode = 302;
  res.setHeader("Location", "/");
  return res.end();
 }
 res.setHeader("Content-Type", "text/html");
 res.write("<html>");
 res.write("<head><head><title>Server</title></head>");
 res.write("<body><h1>Node.js has started!</h1></body>");
 res.write("<html>");
 res.end();
});

server.listen(3000);
