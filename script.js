function stringChop(str, size) {
  // your code here
	if (str === null) {
    return [];
  }
	let res = [];
	for (let i = 0; i < str.length; i+= size) {
		let v = str.substring(i,i+size)
		res.push(v)
	}
	return res;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."));
alert(stringChop(str, size));
