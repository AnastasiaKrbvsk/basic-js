const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

class VigenereCipheringMachine {
    constructor(type = true) {
        if (this.type === type) return 'direct';
        else return 'reverse';
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error();
        message = message.toUpperCase();
        key = key.toUpperCase();
        let encryptWord = '';
        let str = '';
        let j = 0;
        for (let i = 0; i < message.length; i++) {
            if (/[A-Z]/.test(message[i])) {
                str = (message.charCodeAt(i) + key.charCodeAt(j % key.length)) % ALPHABET.length;
                encryptWord += String.fromCharCode(str + 65);
                j++;
            } else {
                encryptWord += message[i];
            }
        }
        if (this.type === 'reverse') return encryptWord.split('').reverse().join('');
        return encryptWord;
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error();
        message = message.toUpperCase();
        key = key.toUpperCase();
        let decryptWord = '';
        let str = '';
        let j = 0;
        for (let i = 0; i < message.length; i++) {
            if (/[A-Z]/.test(message[i])) {
                str = (message.charCodeAt(i) - key.charCodeAt(j % key.length));
                if (str >= 0) {
                    decryptWord += String.fromCharCode((str % ALPHABET.length) + 65);
                    j++;
                } else {
                    decryptWord += String.fromCharCode((ALPHABET.length + str % ALPHABET.length) + 65);
                    j++;
                }
                // decryptWord += String.fromCharCode(str + 65);
                // str < 0 ? str = 26 + str : false;
                // if (j === key.length - 1) j = 0;
                // else j++;
            } else {
                decryptWord += message[i]; 
            }
        }
        if (!this.type === 'reverse') return decryptWord.split('').reverse().join('');
        return decryptWord;
    }
}

module.exports = VigenereCipheringMachine;