const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const UpperCode = 65;
class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type ? 'direct' : 'reverse'
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error();
        let encryptWord = '';
        let str = '';
        let j = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0; i < message.length; i++) {
            if (/[A-Z]/.test(message[i])) {
                str = (message.charCodeAt(i) + key.charCodeAt(j % key.length)) % ALPHABET.length;
                encryptWord += String.fromCharCode(str + UpperCode);
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
        let decryptWord = '';
        let str = '';
        let j = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0; i < message.length; i++) {
            if (/[A-Z]/.test(message[i])) {
                str = (message.charCodeAt(i) - key.charCodeAt(j % key.length));
                if (str >= 0) {
                    decryptWord += String.fromCharCode((str % ALPHABET.length) + UpperCode);
                    j++;
                } else {
                    decryptWord += String.fromCharCode((ALPHABET.length + str % ALPHABET.length) + UpperCode);
                    j++;
                }
            } else {
                decryptWord += message[i]; 
            }
        }
        if (this.type === 'reverse') return decryptWord.split('').reverse().join('');
        return decryptWord;
    }
}

module.exports = VigenereCipheringMachine;