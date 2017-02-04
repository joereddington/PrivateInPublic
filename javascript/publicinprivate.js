function encrypt(input){
return CryptoJS.AES.encrypt(input, "hardcoded").toString();
}

