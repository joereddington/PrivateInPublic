# Synopsis


This is a Chrome Exentions that allows you to encrypt small sections of the content you write into webpages.  It will convert: 

"I like §d:postmen§" into 

"I like §e:U2FsdGVkX1/s5MdPIxsWMO0XvnZoWhcAM/76AWI6Y/I=§"

When you are viewing a page with encrypted content, the bookmarklet will let you view them, provided that you have the right passphrase.   You can share your passcode with friends, or not.

# Examples
(Examples are from a previous version, which used tags [d:like this]
Some screenshots of [this](https://www.reddit.com/r/shadowcryptplayground/comments/5s2ol9/this_is_a_test_of_some/).

### Writing: 
![screen shot 2017-02-04 at 19 34 04](https://cloud.githubusercontent.com/assets/4369547/22621165/b89bbbf8-eb14-11e6-836a-6e5c048dbdda.png)

### Activated: 
![screen shot 2017-02-04 at 20 00 45](https://cloud.githubusercontent.com/assets/4369547/22621166/b89c4582-eb14-11e6-8f31-3f8b914f9040.png)

### Submited: 
![screen shot 2017-02-04 at 20 17 50](https://cloud.githubusercontent.com/assets/4369547/22621251/2444d1ee-eb17-11e6-8b51-24cb552a76a8.png)

### Activated again.
![screen shot 2017-02-04 at 20 17 39](https://cloud.githubusercontent.com/assets/4369547/22621250/2443e61c-eb17-11e6-883e-b5d79dc8070b.png)


## Webapp 
There is an ugly web version at the github pages site [here](https://joereddington.github.io/PrivateInPublic/). I would love someone to make that pretty, add css, and all of those things. 


To install it, bookmark [this link](javascript:(function()%7Bfunction%20callback()%7Bfunction%20encrypt(input%2C%20passcode)%20%7Bpasscode%20%3D%20passcode%20%7C%7C%20%22hardcoded%22%3Breturn%20CryptoJS.AES.encrypt(input%2C%20passcode).toString()%3B%7Dfunction%20decrypt(ciphertext%2C%20passcode)%20%7Bpasscode%20%3D%20passcode%20%7C%7C%20%22hardcoded%22%3Bvar%20bytes%20%3D%20CryptoJS.AES.decrypt(ciphertext%2C%20passcode)%3Bvar%20plaintext%20%3D%20bytes.toString(CryptoJS.enc.Utf8)%3Breturn%20plaintext%3B%7Dfunction%20parse(input%2C%20passcode)%20%7Bpasscode%20%3D%20passcode%20%7C%7C%20%22hardcoded%22%3BinputArray%20%3D%20input.split(%2F%5C%5B%7C%5C%5D%2F)%3Bfor%20(var%20i%20%3D%201%3B%20i%20%3C%20inputArray.length%3B%20i%20%2B%3D%202)%20%7Bif%20(inputArray%5Bi%5D.startsWith(%22e%3A%22))%20%7BinputArray%5Bi%5D%20%3D%20%22%5B%22%20%2B%20decrypt(inputArray%5Bi%5D.slice(2)%2C%20passcode)%20%2B%20%22%5D%22%3B%7D%20else%20%7BinputArray%5Bi%5D%20%3D%20%22%5Be%3A%22%20%2B%20encrypt(inputArray%5Bi%5D%2C%20passcode)%20%2B%20%22%5D%22%3B%7D%7Dreturn%20inputArray.join(%22%22)%7Dfunction%20htmlreplace(element%2C%20passcode)%20%7B%20%2F*modified%20from%20http%3A%2F%2Fstackoverflow.com%2Fa%2F1175796%2F170243*%2Fpasscode%20%3D%20passcode%20%7C%7C%20%22hardcoded%22%3Bif%20(!element)%20element%20%3D%20document.body%3Bvar%20nodes%20%3D%20element.childNodes%3Bfor%20(var%20n%20%3D%200%3B%20n%20%3C%20nodes.length%3B%20n%2B%2B)%20%7Bif%20(nodes%5Bn%5D.nodeType%20%3D%3D%20Node.TEXT_NODE)%20%7Bnodes%5Bn%5D.textContent%20%3D%20parse(nodes%5Bn%5D.textContent%2C%20passcode)%3B%7D%20else%20%7Bhtmlreplace(nodes%5Bn%5D%2C%20passcode)%3B%7D%7D%7Dfunction%20changeall(passcode)%20%7Bpasscode%20%3D%20passcode%20%7C%7C%20%22hardcoded%22%3Bvar%20inputsArray%20%3D%20document.getElementsByTagName('textarea')%3Bfor%20(i%20%3D%200%3B%20i%20%3C%20inputsArray.length%3B%20i%2B%2B)%20%7Bif%20(inputsArray%5Bi%5D.type%20%3D%3D%20'textarea')%20%7Bvar%20contents%20%3D%20parse(inputsArray%5Bi%5D.value%2C%20passcode)%3BinputsArray%5Bi%5D.value%20%3D%20contents%3B%7D%7Dhtmlreplace(document.body%2C%20passcode)%3B%7Dchangeall()%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fcrypto-js%2F3.1.2%2Frollups%2Faes.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()).  

But I would very much recommend changing the deafault password by searching the string for "changeme".  

In full, the bookmarklet (generated with http://mrcoles.com/bookmarklet/ and requiring [this](https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js) script) looks like this: 

```
javascript:(function()%7Bfunction%20callback()%7Bfunction%20encrypt(input%2C%20passcode)%20%7Bpasscode%20%3D%20passcode%20%7C%7C%20%22hardcoded%22%3Breturn%20CryptoJS.AES.encrypt(input%2C%20passcode).toString()%3B%7Dfunction%20decrypt(ciphertext%2C%20passcode)%20%7Bpasscode%20%3D%20passcode%20%7C%7C%20%22hardcoded%22%3Bvar%20bytes%20%3D%20CryptoJS.AES.decrypt(ciphertext%2C%20passcode)%3Bvar%20plaintext%20%3D%20bytes.toString(CryptoJS.enc.Utf8)%3Breturn%20plaintext%3B%7Dfunction%20parse(input%2C%20passcode)%20%7Bpasscode%20%3D%20passcode%20%7C%7C%20%22hardcoded%22%3BinputArray%20%3D%20input.split(%2F%5C%5B%7C%5C%5D%2F)%3Bfor%20(var%20i%20%3D%201%3B%20i%20%3C%20inputArray.length%3B%20i%20%2B%3D%202)%20%7Bif%20(inputArray%5Bi%5D.startsWith(%22e%3A%22))%20%7BinputArray%5Bi%5D%20%3D%20%22%5B%22%20%2B%20decrypt(inputArray%5Bi%5D.slice(2)%2C%20passcode)%20%2B%20%22%5D%22%3B%7D%20else%20%7BinputArray%5Bi%5D%20%3D%20%22%5Be%3A%22%20%2B%20encrypt(inputArray%5Bi%5D%2C%20passcode)%20%2B%20%22%5D%22%3B%7D%7Dreturn%20inputArray.join(%22%22)%7Dfunction%20htmlreplace(element%2C%20passcode)%20%7B%20%2F*modified%20from%20http%3A%2F%2Fstackoverflow.com%2Fa%2F1175796%2F170243*%2Fpasscode%20%3D%20passcode%20%7C%7C%20%22hardcoded%22%3Bif%20(!element)%20element%20%3D%20document.body%3Bvar%20nodes%20%3D%20element.childNodes%3Bfor%20(var%20n%20%3D%200%3B%20n%20%3C%20nodes.length%3B%20n%2B%2B)%20%7Bif%20(nodes%5Bn%5D.nodeType%20%3D%3D%20Node.TEXT_NODE)%20%7Bnodes%5Bn%5D.textContent%20%3D%20parse(nodes%5Bn%5D.textContent%2C%20passcode)%3B%7D%20else%20%7Bhtmlreplace(nodes%5Bn%5D%2C%20passcode)%3B%7D%7D%7Dfunction%20changeall(passcode)%20%7Bpasscode%20%3D%20passcode%20%7C%7C%20%22hardcoded%22%3Bvar%20inputsArray%20%3D%20document.getElementsByTagName('textarea')%3Bfor%20(i%20%3D%200%3B%20i%20%3C%20inputsArray.length%3B%20i%2B%2B)%20%7Bif%20(inputsArray%5Bi%5D.type%20%3D%3D%20'textarea')%20%7Bvar%20contents%20%3D%20parse(inputsArray%5Bi%5D.value%2C%20passcode)%3BinputsArray%5Bi%5D.value%20%3D%20contents%3B%7D%7Dhtmlreplace(document.body%2C%20passcode)%3B%7Dchangeall()%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fcrypto-js%2F3.1.2%2Frollups%2Faes.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
```

# Tests
My commands for starting the testing after cloning the repo were: 

```
36601  04/02/17 11:21:18 npm install karma --save-dev
36602  04/02/17 11:21:56 karma init my.conf.js
36604  04/02/17 11:22:37 cp ../comscan/my.conf.js .  #used an old one
36614  04/02/17 11:30:02 karma start my.conf.js
36615  04/02/17 11:30:17 npm install karma-coverage --save-dev  #the old one needed me to install something else. 
36616  04/02/17 11:30:57 karma start my.conf.js

```

# Licence 
As per file 

# Contributors 
Lots of helpful people on Facebook - thank you everybody. 
