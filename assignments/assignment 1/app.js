const  http = require('http');

const server = http.createServer( (req, res) => {
  const url = req.url;
  const method = req.method;
  var newUser;
  if(url === '/') {
    res.write('<html>');
    res.write('<head><title>Welcome to the users program </title></head>');
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="user"></input><button type="submit">Enter your user</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  
  if(url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      newUser = parsedBody.split('=')[1];
      console.log("newUser: ", newUser);
      res.statusCode = 302;
      res.setHeader('Location', '/users');
      return res.end();
    });
  }

  if(url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Available users</title></head>');
    res.write('<body><h1>List of available users</h1>');
    res.write('<ul>');
    res.write('<li>Max</li>');
    res.write('<li>Max 2</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }
});

server.listen(3000);