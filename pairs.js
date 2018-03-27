/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
function pairs(names) {
	names = names || [];
	let result = [];

	while(names.length){
		if(names.length === 1){
			result.push([names[0]]);
			break;
		}
		result.push([names.getRandom(), names.getRandom()])
	}
	return result;






	// let pairs = []

	// if (!names || names.length === 0) {
	// 	let names = [];
	// 	return names;
	// } else if(names.length === 2){
	// 	pairs.push([names[0],names[1]]);
	// 	return pairs;

	// } else if(names.length%2 === 0){
	// 	for (let i = names.length - 1; i >= 0; i-=2) {
	// 		pairs.push([ names[i],names[i-1] ]);
	// 	}

	// 	return pairs;
	// } else if(names.length%2 !==0){
	// 	for (let i = 0; i < names.length; i+=2) {
	// 		if(names.length > i){
	// 			pairs.push([ names[i], names[i+1] ]);
	// 		} else {
	// 			pairs.push([names[i]]);
	// 			break;
	// 		}
	// 	}
	// 	return pairs;
	// }
	
}


export default pairs;

/**********************************************
* READ ME!!!!
*
* We've including this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}
