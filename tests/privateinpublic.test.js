/*
 * Unit tests for javascript/comscan.js
 *
 */
describe('PublicInPrivate', function() {
  
  
  // inject the HTML fixture for the tests

    it('do we have a function called "encrypt"', function() {
        expect(encrypt).toBeDefined();
    });


   it('Can the encrpyt function encrypt some text with a hardcoded passcode', function() {
	var ciphertext=encrypt("Test String")

	// Decrypt from https://www.npmjs.com/package/crypto-js
	var bytes  = CryptoJS.AES.decrypt(ciphertext, 'hardcoded');
	var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        expect(plaintext).toBe("Test String");
    });

   it('Can the encrpyt function encrypt some text with a passcode as argument', function() {
	var ciphertext=encrypt("Test String","passcode")

	// Decrypt from https://www.npmjs.com/package/crypto-js
	var bytes  = CryptoJS.AES.decrypt(ciphertext, 'passcode');
	var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        expect(plaintext).toBe("Test String");
    });

   it('Checking that Spy.callFake does what I want...', function() {
   spyOn(window, "encrypt").and.callFake(function(string, passcode) {
      return string.split("").reverse().join("");//from https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.z8u4jebnx
    });
	var ciphertext=encrypt("Test String","passcode")
        expect(ciphertext).toBe("gnirtS tseT");
    });

});
