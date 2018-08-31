// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// return str.split('').reverse().join('');

	/* let reversed = '';
	for (let ch of str) {
		reversed = ch + reversed;
	}
	return reversed; */

	const strToArr = str.split('');
	return strToArr.reduce((reversed, ch) => {
		return ch + reversed;
	}, '');
}

module.exports = reverse;
