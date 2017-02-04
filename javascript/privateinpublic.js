function encrypt(input, passcode) {
    passcode = passcode || "hardcoded";
    return CryptoJS.AES.encrypt(input, passcode).toString();
}

function decrypt(ciphertext, passcode) {
    passcode = passcode || "hardcoded";
    var bytes = CryptoJS.AES.decrypt(ciphertext, passcode);
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
}



function parse(input, passcode) {
    passcode = passcode || "hardcoded";
    inputArray = input.split(/\[|\]/);
    console.log(inputArray);
    for (var i = 1; i < inputArray.length; i += 2) {
        if (inputArray[i].startsWith("e:")) {
            inputArray[i] = "[" + decrypt(inputArray[i].slice(2), passcode) + "]";
        } else {
            inputArray[i] = "[e:" + encrypt(inputArray[i], passcode) + "]";
        }
    }
    return inputArray.join("")


}
