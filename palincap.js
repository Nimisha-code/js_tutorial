// reverse a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

//return true for a palindrome, false otherwise. using this
this.louder = function() {
  return this.content.toUpperCase();
}
}
