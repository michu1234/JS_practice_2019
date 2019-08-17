function vowelsAndConsonants(s) {
  let consonants = [];
  let vowels = ["a", "e", "i", "o", "u"];
  let stringToArray = s.split("");

  stringToArray.map(letter => {
    vowels.includes(letter) ? console.log(letter) : consonants.push(letter);
  });
  consonants.forEach(letter => console.log(letter));
}

let testString = "asdfasfasdfasdfdaaaaa";

vowelsAndConsonants(testString);
