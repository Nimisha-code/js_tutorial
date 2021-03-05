let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

function functionalMap(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalMap(states));

function functionalFullMap(elements) {
  return elements.map(element => "http://example.com/" + element);
}
console.log(functionalFullMap(functionalMap(states)));
