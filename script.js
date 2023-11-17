function stringChop(str, size) {
  // your code here
	let chunkArray = [];
    
    while(str.length > 0) {
        let chunk = str.slice(0, size);
        str = str.slice(size);
        chunkArray.push(chunk);
    }

    return chunkArray;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
