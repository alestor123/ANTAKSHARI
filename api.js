var spell = require('spell-checker-js'),
axios = require('axios'),
ini = '',
cnt = 0,
arwords = [];
spell.load('en')
module.exports = async msg => {
var key = msg.content.split(' ')[1] || '',
words = (await axios.get('https://random-word-api.herokuapp.com/all')).data;
if(cnt>=1) if(msg.content.startsWith('anth')&&msg.content.split(' ')[1]) if(!(ini.slice(-1)==key.charAt(0))) msg.reply('Please use the last letter')
cnt++
if(msg.content.startsWith('anth')&&msg.content.split(' ')[1]) if((!(arwords.includes(key) || arwords.includes(rword)))&&spell.check(key).length==0){
var rword = randomWord(words,key)
msg.reply(rword)
}
else msg.reply({embed: {title:'please enter a valid word !!',}})
}
function randomWord(words,key){
var warr = words.filter(aword => aword.startsWith(key.slice(-1))),
rword = warr[Math.floor(Math.random() * warr.length)];  
ini=rword
arwords.push(key,rword)
return rword
}