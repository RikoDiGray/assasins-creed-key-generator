const colors = require("colors");
const fs = require("fs");


const data = [];

var text = '';
var text2 = data.join('\n');
var symb = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','1','2','3','4','5','6','7','8','9','0'];
var counter = 1;
var active = true;
var ms = 100;


function run() {
    text2 = data.join('\n');
    var random = Math.floor(Math.random() * symb.length);
    currentSymb = symb[random];
    text += `${currentSymb}`;
    if(counter == 3) text += '-';
    if(counter == 7) text += '-';
    if(counter == 11) text += '-';
    if(counter == 15) text += '-';
    counter++;
}

var init = setInterval(function() {
    for(i = 0; i < 19; i++) {
        run();
    }
    console.log(`${text}`.green);
    data.push(text);
    text = '';
    counter = 1;
    if(!active) {
        clearInterval(init);
        console.log(`Script was stopped`.red);
    }
    fs.writeFileSync('keys.txt', text2);
}, ms);
