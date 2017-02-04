
function encrypt(input, passcode){
passcode=passcode || "hardcoded"
return CryptoJS.AES.encrypt(input,passcode).toString();
}

function decrypt(ciphertext, passcode){
passcode=passcode || "hardcoded"
	var bytes  = CryptoJS.AES.decrypt(ciphertext, passcode);
	var plaintext = bytes.toString(CryptoJS.enc.Utf8);
return plaintext
}



function parse(input, passcode){
passcode=passcode || "hardcoded"

inputArray=input.split(/\[|\]/)
console.log(inputArray)
//for now we assume that we start with plaintext, there will be a test for this later. 
//So every other element should be encrypted

//let's use a for loop. 
//

for (var i=1; i<inputArray.length;i+=2){
if(inputArray[i].startsWith("e:")){
inputArray[i]="["+decrypt(inputArray[i].slice(2),passcode)+"]"
}else{
inputArray[i]="[e:"+encrypt(inputArray[i],passcode)+"]"
}
}

console.log("Returning: "+inputArray.join(""))

return inputArray.join("")


}
