/**
 * Created by 1301657 on 30/11/2015.
 */
var Twitter = require('twitter');
var http = require('http');
var port = process.env.PORT || 1337;


var client = new Twitter({
    consumer_key: 'Rsz60Vj2XNaxd5TeXevSp6civ',
    consumer_secret: '8NkRYKhgJ8wGWHYXbyg1BEsemvdzNxDM4iCj8VtkYgJf5IpCeo',
    access_token_key: '303217938-CdB8Ye7rQEWX7M1Nb40qoNWimtWnIq65LRDeS2fB',
    access_token_secret: 'bLhNRxW1FgCM2R4lhhFhSqEcPwhIAsGmvKv6kEn6dX9K1'
});

var json = [];

for (var i =0; i< tweets.statuses.length; i++)
{
    json.push({name: tweets.statuses[i].user.name, text: tweets.statuses[i].text})
}
response.end(JSON.stringify(json));

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*' });
    client.get('search/tweets', {q: 'lolcat'}, function (error, tweets) {
        response.end(JSON.stringify(tweets));
    });
}).listen(port);