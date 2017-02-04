
function encrypt(input, passcode){
passcode=passcode || "hardcoded"
return CryptoJS.AES.encrypt(input,passcode).toString();
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
inputArray[i]="[e:"+encrypt(inputArray[i],passcode)+"]"
}


return inputArray.join("")


}
