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

});
