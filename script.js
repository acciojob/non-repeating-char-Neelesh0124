function firstNonRepeatedChar(str) {
 // Write your code here
	
	for (let i = 0; i < str.length; i++) {
		for (let j = i+1; j < bound; j++) {
			if (str[i] != str[j]) {
				console.log(str[i]);
				break;
			}
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
