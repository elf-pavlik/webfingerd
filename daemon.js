var express = require('express');
var cors = require('cors');
var config = require('./config.json');

var daemon = express();

daemon.use(cors({ origin: true, credentials: true }));

// CORS Pre-Flight https://github.com/troygoode/node-cors#enabling-cors-pre-flight
daemon.options('*', cors());


daemon.get('/.well-known/webfinger', function(req, res){
  //FIXME: don't assume that profile exists
  var profile = require(config.profilesDir + '/' + req.query.resource.replace('acct:', '') + '.json');
  res.json(profile);
});

daemon.listen(config.port, function(){
  console.log('listening on ', config.port);
});
