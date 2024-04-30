function stringChop(str, size) {
  // your code here
	let res = [];
	for (let i = 0; i < str.length; i+= size) {
		let v = str.substring(i,i+size)
		res.push(v)
	}
	return res;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
