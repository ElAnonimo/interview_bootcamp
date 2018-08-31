// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/* function vowels(str) {
	let count = 0;
	// let checkVowels = 'aeiou';
	let checkVowels = ['a', 'e', 'i', 'o', 'u'];

	for (let char of str.toLowerCase()) {
		if (checkVowels.includes(char)) {
			count++;
		}
	}

	return count;
} */

function vowels(str) {
	const matches = str.toLowerCase().match(/[aeiou]/g);		// match() returns array of matches or null
	return matches ? matches.length : 0;
}

module.exports = vowels;
