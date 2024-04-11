import express from 'express';
const app = express();
import { router as bikesRouter } from './Router/router.js';
//数据库名
//const db = CyclicDb('lazy-red-chinchilla-wearCyclicDB');
//文档集合名
//const animals = db.collection('animals');
/* app.all('/', (req, res) => {
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
 */
app.use(express.json()); //json
app.use(express.urlencoded({ extended: true }));

app.use('/bikes', bikesRouter); // 使用路由

const port = 3000;
app.listen(port, () => {
	console.log(`监听这个${port}端口`);
});
