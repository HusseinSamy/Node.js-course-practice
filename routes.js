/** @format */
const fs = require("fs");

const routesHandler = (req, res) => {
 if (req.url === "/") {
  res.write("<html>");
  res.write("<body>Hello from the assignment!</body>");
  res.write(
   "<body><form method='POST' action='/create-user'><input type='text' name='username'><button type='submit'>Submit Username</button></form></body>"
  );
  res.write("<html>");
  return res.end();
 }
 if (req.url === "/users") {
  res.write("<html>");
  res.write(
   "<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>"
  );
  res.write("<html>");
  return res.end();
 }

 if (req.url === "/create-user" && req.method === "POST") {
  const body = [];
  req.on("data", (chunk) => {
   body.push(chunk);
   console.log(chunk);
   console.log(typeof chunk);
  });
  return req.on("end", () => {
   const bodyString = Buffer.concat(body).toString();
   const message = bodyString.split("=")[1];
   console.log(message);
   fs.writeFileSync("req.txt", message);
   res.statusCode = 302;
   res.setHeader("Location", "/users");
   return res.end();
  });
 }
};

module.exports = { handler: routesHandler };
