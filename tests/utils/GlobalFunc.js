let Utils = require('../utils/utils.js')

class GlobalFunc {
    RandomEmail() {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for (var ii = 0; ii < 15; ii++) {
          string += chars[Math.floor(Math.random() * chars.length)];
        }
        return (string + '@gmail.com');
      }
    
      splitWords(totalWords) {
        var firstWord = totalWords.replace(/ .*/, '');
        return firstWord
      }
}

module.exports = new GlobalFunc();

