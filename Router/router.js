// router.js

import { Router } from 'express';

// Initialize Express router
export const router = Router();
import { DynamoDb } from '@cyclic.sh/dynamodb';

// Initialize AWS DynamoDB 初始化数据库对象  使用cyclic的变量
const db = DynamoDb(process.env.CYCLIC_DB);
const bikesCollection = db.collection('bikes');

// Get all bikes
router.get('/all', async (req, res) => {
	const { results: bikesMetadata } = await bikesCollection.list();

	const bikes = await Promise.all(bikesMetadata.map(async ({ key }) => (await bikesCollection.get(key)).props));

	res.send(bikes);
});
