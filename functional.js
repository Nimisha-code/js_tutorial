let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
// Retur
// urls: a url-friendly version of a string.
// example North Dakota -> north

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}



// Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// functionalUrls
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

//singles: Imperative version
function imperativeSingles(elements) {
let singles = [];
elements.forEach(function(element) {
  if(element.split(/\s+/).length === 1) {
  singles.push(element);
}
});
return singles;
}
console.log(imperativeSingles(states));


// singles functional

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// double functional

function functionalDouble(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalDouble(states));

// include functional

function functionalInclude(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(functionalInclude(states));

// Sum: Imperative solution

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));


// Sum: functional solution

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n; });
}
console.log(functionalSum(number));

// length: Imperative solution

function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
    return lengths;
}
console.log(imperativeLengths(states));


// length: functional solution

function functionalLengths(elements) {
return elements.reduce((lengths, element) => {
  lengths[element] = element.length;
  return lengths;
}, {});
}
console.log(functionalLengths(states));
