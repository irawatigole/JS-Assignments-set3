// Write a function to convert a name into initials. This program strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// abbreviate('Sam Harris') returns  'S.H'

// abbreviate('Patrick Feeney') returns 'P.F'


function abbreviate(a){
	if (a.length !=0){
 var initial= a.split(' ');
	return `${initial[0].charAt(0)}.${initial[1].charAt(0)}`;
	} else {
		return '';
	}
}
console.log(abbreviate('Sam Harris'));
console.log(abbreviate('Patrick Feeney'));
console.log(abbreviate(''));