function reverseString(s) {
  try {
    let reversedString = s
      .split("")
      .reverse()
      .join("");
    console.log(reversedString);
  } catch (e) {
    console.log("s.split is not a function");
    console.log(s);
  }
}
