var request = require('request')
  , cheerio = require('cheerio');


var controller = {};

var names = [];

exports.get = function(req, response) {
  response.set('Access-Control-Allow-Origin','*');
  if(names.length > 0) {
    console.log('local cache');
    response.json({names: names});
  } else {
    console.log('requesting names');
    request.get('http://marvel.com/comics/characters', function(err, res){
      $ = cheerio.load(res.body);

      $('.az-list ul li').each(function(index, element){
        names.push($(element).find('a').text());
      });
      response.json({names: names});
    });
  }
}

exports.refresh = function(req, res) {
  names = [];
  exports.get(req, res);
}