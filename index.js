const express = require('express');
const app = express();
const CyclicDb = require('@cyclic.sh/dynamodb');
//数据库名
const db = CyclicDb('lazy-red-chinchilla-wearCyclicDB');
//文档集合名
const animals = db.collection('animals');
app.all('/', (req, res) => {
	console.log('Just got a request!');
	res.send('Yo!');
});
app.get('/getUser', (req, res) => {
	console.log('Just got a request!');
	res.send('当前没有任何数据!');
});
app.get('/addcat', (req, res) => {
	//创建对象
	let leo = animals.set('leo', {
		type: 'cat',
		color: 'orange'
	});

	//获取这个对象
	let item = animals.get('leo');
	console.log(item);
	res.send('item!' + item);
});

app.listen(process.env.PORT || 3000);
