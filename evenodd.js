function check(num) {
  if(num%2 == 0) {
    return "even";
  } else {
    return "odd"
  }
}
console.log(check(8));


// using filter version
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenOdd(elements) {
  return elements.filter(element => element%2 === 0);
}
console.log(evenOdd(n));

// using filter version, divisible by 3
for(let i = 0; i<=100; i++) {
  if(i%3===0){
    console.log(i);
  }

}
