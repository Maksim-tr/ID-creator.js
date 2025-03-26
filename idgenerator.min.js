
function generateID({length = 20, allowedSymbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789-_", allowSpecChars = true, allowNumbers = true, allowCapitalizeLetters = true, min = 0} = {}) {
if(allowedSymbols !== "") {
var generatedID = "";

if(!allowCapitalizeLetters) {
allowedSymbols = allowedSymbols.replace(/[A-Z]/g, '')
}


if(!allowSpecChars) {
allowedSymbols = allowedSymbols.replace(/[\~\`\|\•\√\π\÷\×\¶\∆\£\¢\€\¥\^\°\=\{\}\\\%\©\®\™\℅\[\]\@\#\$\_\&\-\+\(\)\/\*\"\'\:\;\!\?\<\>\,\.]/g, '');
}
if(!allowNumbers) {
allowedSymbols = allowedSymbols.replace(/[0-9]/g, '');
}


if(Math.floor(min) > 0 && Math.floor(length) <= 0) {
for(var j = 0; j < min; j++) {
generatedID += allowedSymbols[Math.floor(Math.random() * allowedSymbols.length)];
}
}
for(var i = 0; i < length; i++) {
generatedID += allowedSymbols[Math.floor(Math.random() * allowedSymbols.length)]
}

return generatedID;
}
else {
return "";
}
}
