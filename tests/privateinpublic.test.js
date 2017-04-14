/*
 * Unit tests for javascript/privateinpublic.js
 *
 */
describe('PublicInPrivate', function() {


    // inject the HTML fixture for the tests

    it('do we have a function called "encrypt"', function() {
        expect(encrypt).toBeDefined();
    });


    it('Can the encrpyt function encrypt some text with a hardcoded passcode', function() {
        var ciphertext = encrypt("Test String")

        // Decrypt from https://www.npmjs.com/package/crypto-js
        var bytes = CryptoJS.AES.decrypt(ciphertext, 'hardcoded');
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        expect(plaintext).toBe("Test String");
    });

    it('Can the encrpyt function encrypt some text with a passcode as argument', function() {
        var ciphertext = encrypt("Test String", "passcode")

        // Decrypt from https://www.npmjs.com/package/crypto-js
        var bytes = CryptoJS.AES.decrypt(ciphertext, 'passcode');
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        expect(plaintext).toBe("Test String");
    });

    it('Checking that Spy.callFake does what I want...', function() {
        spyOn(window, "encrypt").and.callFake(function(string, passcode) {
            return string.split("").reverse().join(""); //from https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.z8u4jebnx
        });
        var ciphertext = encrypt("Test String", "passcode")
        expect(ciphertext).toBe("gnirtS tseT");
    });


    it('can replace only the text surounded by a marker', function() {
        spyOn(window, "encrypt").and.callFake(function(string, passcode) {
            return string.split("").reverse().join(""); //from https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.z8u4jebnx
        });
        var ciphertext = parse("Test [d:This part of this] String", "passcode")
        expect(ciphertext).toBe("Test [e:siht fo trap sihT] String");
    });


    it('leaves strings with NO marker alone', function() {
        spyOn(window, "encrypt").and.callFake(function(string, passcode) {
            return string.split("").reverse().join(""); //from https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.z8u4jebnx
        });
        var ciphertext = parse("Test String", "passcode")
        expect(ciphertext).toBe("Test String");
    });


    it('deals with strings that start with a secret', function() {
        spyOn(window, "encrypt").and.callFake(function(string, passcode) {
            return string.split("").reverse().join(""); //from https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.z8u4jebnx
        });
        var ciphertext = parse("[d:we have a ] Test String", "passcode")
        expect(ciphertext).toBe("[e: a evah ew] Test String");
    });



    it('correctly replaces several times in a string', function() {
        spyOn(window, "encrypt").and.callFake(function(string, passcode) {
            return string.split("").reverse().join(""); //from https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.z8u4jebnx
        });
        var ciphertext = parse("[d:we have a ] Test [d:an amazing test] String", "passcode")
        expect(ciphertext).toBe("[e: a evah ew] Test [e:tset gnizama na] String");
    });


    it('correctly decrpt text', function() {
        spyOn(window, "encrypt").and.callFake(function(string, passcode) {
            return string.split("").reverse().join(""); //from https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.z8u4jebnx
        });
        spyOn(window, "decrypt").and.callFake(function(string, passcode) {
            return string.split("").reverse().join(""); //from https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.z8u4jebnx
        });
        var ciphertext = parse("[e: a evah ew] Test [e:tset gnizama na] String", "passcode")
        expect(ciphertext).toBe("[d:we have a ] Test [d:an amazing test] String");
    });

    it('correctly replaces several times in a string without spy', function() {
        starttext = "[d:we have a ] Test [d:an amazing test] String"
        var ciphertext = parse(starttext, "hardcoded")
        var plaintext = parse(ciphertext)
        expect(plaintext).toBe(starttext);
    });


    it('it ignores standard markdown hard', function() {
        var starttext = "- [ ] is a check box for [this](http://link.com) Test [d:an amazing test] String"
        var ciphertext = parse(starttext, "hardcoded")
	console.log(ciphertext)
        var plaintext = parse(ciphertext)
        expect(plaintext).toBe(starttext);
    });


 it('it ignores text without the trigger functiosn', function() {
        var starttext = "The quick brown fox jumps"
        var ciphertext = parse(starttext, "hardcoded")
	console.log(ciphertext)
        expect(ciphertext).toBe(starttext);
    });


it('looking at nested functions', function() {
        var starttext = "The [[ quick ]] brown fox jumps"
        var ciphertext = parse(starttext, "hardcoded")
	console.log(ciphertext)
        expect(ciphertext).toBe(starttext);
    });



});
