var screenName;
console.log('bot is started');
var Twit = require('twit');
var T = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
 // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
 // strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
  /*var streamed = T.stream('user');
streamed.on('error', error => {
    console.log('error', error)
  });
streamed.on('follow', followed);
function followed(event){
    var name = event.source.name;
  var screenName = event.source.screen_name;
    tweetit('@' + screenName + 'thank  you for following i am a bot developed by @nav_dhakar');
}*/

function thanx(){
T.get('followers/list', { screen_name: 'botboy52177681' },  get);
function get(err, data, response){
console.log(data.users.length);
var prev = data.users.length-1;
var id = data.users.length-prev;    
screenName = data.users[id].screen_name;
tweetit();
}
}

setInterval(thanx, 1000*5);
  function tweetit(){
      var r = Math.floor(Math.random()*100);
var twit = {
     status: 'thank you' + ' ' +  r + ' ' + 'for following' + ' '+  '@' + screenName }

  T.post('statuses/update', twit, tweeted);
   function tweeted(err, data, response){


      console.log("i thanxed" + screenName);
      
   }
}
