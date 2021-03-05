// reverse a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

//return true for a palindrome, false otherwise. using this
this.processedContent = function processedContent() {
  return this.content.toLowerCase();
}

// Returns true if the phrase is a palindrome, false otherwise
this.palindrome = function palindrome() {
  return this.processedContent() === this.processedContent().reverse();
}
}

// Define a translatephrase object
//function TransalatedPhrase(content, translation) {
  //this.content = content;
  //this.translation = translation;
  //this.processedContent = function processedContent() {
    //return this.translation.toLowerCase();
  //}
//}
//TransalatedPhrase.prototype = new Phrase();
