/**
 * Created by 1301657 on 30/11/2015.
 */
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'Rsz60Vj2XNaxd5TeXevSp6civ',
    consumer_secret: '8NkRYKhgJ8wGWHYXbyg1BEsemvdzNxDM4iCj8VtkYgJf5IpCeo',
    access_token_key: '303217938-CdB8Ye7rQEWX7M1Nb40qoNWimtWnIq65LRDeS2fB',
    access_token_secret: 'bLhNRxW1FgCM2R4lhhFhSqEcPwhIAsGmvKv6kEn6dX9K1'
});


client.get('search/tweets', {q: 'lolcat'}, function(error, tweets){
    console.log(tweets);
});
