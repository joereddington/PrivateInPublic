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
            inputArray[i] = "[" + decrypt(inputArray[i].slice(2), passcode) + "]";
        } else {
            inputArray[i] = "[e:" + encrypt(inputArray[i], passcode) + "]";
        }
    }
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

changeall();
