function firstNonRepeatedChar(str) {
 // Write your code here
	
	for (let i = 0; i < str.length; i++) {
		let flag = false;
		for (let j = i+1; j < bound; j++) {
			if (str[i] == str[j]) {
				flag = true;
				break;
			}
		}
		if (flag==false) {
			return str[i];
			break;
		}
		else{
			return null;
		}
		
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
