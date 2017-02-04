
function encrypt(input, passcode){
passcode=passcode || "hardcoded"
return CryptoJS.AES.encrypt(input,passcode).toString();
}

