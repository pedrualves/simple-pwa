const http = require('http'),
      path = require('path'),
      express = require('express'),
      router = express(),
      server = http.createServer(router)

router.use(express.static(path.resolve(__dirname, 'client')));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log('running...');
});
