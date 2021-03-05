String.prototype.blank = function(){
return !!(this.match(/^\s*$/g));
}

console.log("foobar".blank());
console.log("   foobar".blank());
console.log("foobar   ".blank());
console.log("".blank());
console.log(" ".blank());
console.log("\n".blank());
console.log("\t".blank());
console.log("\r".blank());
console.log("\f".blank());
