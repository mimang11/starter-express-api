/* const CyclicDB = require('cyclic-dynamodb');
const db = CyclicDB('lazy-red-chinchilla-wearCyclicDB'); // find it on the Database/Storage tab

const run = async function () {
	let animals = db.collection('animals');

	// create an item in collection with key "leo"
	let leo = await animals.set('leo', {
		type: 'cat',
		color: 'orange'
	});

	// get an item at key "leo" from collection animals
	let item = await animals.get('leo');
	console.log(item);
};
run();
 */
