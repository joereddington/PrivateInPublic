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
    for (var i = 1; i < inputArray.length; i += 2) {
        if (inputArray[i].startsWith("e:")) {
	    console.log("about to decrypt"+inputArray[i].slice(2))
            inputArray[i] = "[d:" + decrypt(inputArray[i].slice(2), passcode) + "]";
	    console.log("with the result of decrypt"+inputArray[i])
        } else if (inputArray[i].startsWith("d:")) {
	    console.log("about to encrypt"+inputArray[i].slice(2))
            inputArray[i] = "[e:" + encrypt(inputArray[i].slice(2), passcode) + "]";
        } else {
	    inputArray[i] = "["+inputArray[i]+"]"
        }
    }
    console.log( inputArray.join(""))
    return inputArray.join("")
}

function htmlreplace(element, passcode) { /*modified from http://stackoverflow.com/a/1175796/170243*/
    passcode = passcode || "hardcoded";
    if (!element) element = document.body;
    var nodes = element.childNodes;
    for (var n = 0; n < nodes.length; n++) {
        if (nodes[n].nodeType == Node.TEXT_NODE) {
            nodes[n].textContent = parse(nodes[n].textContent, passcode);
        } else {
            htmlreplace(nodes[n], passcode);
        }
    }
}


function changeall(passcode) {
    
    passcode = passcode || "hardcoded";
    var inputsArray = document.getElementsByTagName('textarea');
    for (i = 0; i < inputsArray.length; i++) {
        if (inputsArray[i].type == 'textarea') {
            var contents = parse(inputsArray[i].value, passcode);
            inputsArray[i].value = contents;
        }
    }
    htmlreplace(document.body, passcode);
}
