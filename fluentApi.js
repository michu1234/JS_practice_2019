// fluent API example:

class Word {
  constructor(word) {
    this.word = word;
  }

  wordToUpperCase() {
    this.word = this.word.toUpperCase();
    return this;
  }

  wordLastLetter() {
    this.word = this.word.slice(this.word.length - 1, this.word.length);
    return this;
  }

  wordToArray(n) {
    let arr = Array(n);
    this.word = arr.fill(this.word, 0, n);
    return this;
  }
}


let slogan = new Word("Just Do It");

slogan.wordToUpperCase().wordLastLetter().wordToArray(3) /*?*/

