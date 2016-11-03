var expect = require('chai').expect;
var dikkenek = require('./index');

describe('dikkenek-quotes', function(){
  describe('all', function(){
    it('it should be an array of string', function(){
      expect(dikkenek.all).to.satisfy(isArrayOfString);

      function isArrayOfString(array){
        return array.every(function(item){
          return typeof item === 'string';
        })
      }
    });

    it('it should contain `C’est excessivement énervant !`', function(){
      expect(dikkenek.all).to.include('C’est excessivement énervant !');
    });

  });

  describe('random', function(){
    it('should return a random item from dikkenk.all', function(){
      var randomItem = dikkenek.random();
      expect(dikkenek.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function(){
      var randomItem = dikkenek.random(3);
      expect(randomItem).to.have.length(3);
      randomItem.forEach(function(item){
        expect(dikkenek.all).to.include(item);
      })
    });
  });
});
