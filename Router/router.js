// router.js

import { Router } from 'express';

// Initialize Express router
export const router = Router();
import dyDb from '@cyclic.sh/dynamodb';

// Initialize AWS DynamoDB 初始化数据库对象  使用cyclic的变量
//const db = dyDb(process.env.CYCLIC_DB);
const db = dyDb('lazy-red-chinchilla-wearCyclicDB');
const bikesCollection = db.collection('bikes');

// Get all bikes
router.get('/all', async (req, res) => {
	const { results: bikesMetadata } = await bikesCollection.list();

	//const bikes = await Promise.all(bikesMetadata.map(async ({ key }) => (await bikesCollection.get(key)).props));

	// 创建一个空数组来存储所有自行车的详细信息
	const bikes = [];

	// 遍历所有自行车的元数据
	for (const { key } of bikesMetadata) {
		// 使用自行车的标识符（key）从数据源中获取详细信息
		const bikeData = await bikesCollection.get(key);

		// 从获取到的数据中提取自行车的详细信息，并将其存入数组
		bikes.push(bikeData.props);
	}

	res.send(bikes);
});
