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
There is an ugly web version to play with the tags and concept at the github pages site [here](https://joereddington.github.io/PrivateInPublic/). I would love someone to make that pretty, add css, and all of those things. 


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

The icon used is a Creative Commons BY-SA image from [Straight Street](http://straight-street.com/lic.php)

The aes.js file is provided under [this licence](https://code.google.com/archive/p/crypto-js/wikis/License.wiki) 

# Contributors 
Lots of helpful people on Facebook - thank you everybody. 
