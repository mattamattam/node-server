import request from 'supertest';
import app from '../index';

var inventory = require('../data/inventory.json');

describe('GET /api/products', () => {
    it('should return a list of all products', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(inventory.products);
    });
});

describe('Get /api/products/totalcost', () => {
    it('should return correct value', async () => {
        const res = await request(app).get('/api/products/totalcost');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({"totalCost":3103.459999999999});
    });
});

describe('GET /api/products/:id', () => {
    it('should return item with matching id', async () => {
        const res = await request(app).get('/api/products/20');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual( {
            "id": 20,
            "name": "Vegetable Soup",
            "description": "Healthy and hearty vegetable soup",
            "type": "food",
            "price": 3.99
        });
    });
    it('should return 404 with no matching id', async () => {
        const res = await request(app).get('/api/products/55');
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual({});
    });
});

describe('Get /api/products/type/:type', () => {
    it('should return list of products by given type', async () => {
        const res = await request(app).get('/api/products/type/clothing');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([
            {
                "id": 1,
                "name": "Men's T-shirt",
                "description": "Basic men's t-shirt in multiple colors - blue, black, green",
                "type": "clothing",
                "price": 9.99
            },
            {
                "id": 2,
                "name": "Women's Skirt",
                "description": "Basic women's skirt in multiple colors - blue, black, green",
                "type": "clothing",
                "price": 15.99
            },
            {
                "id": 9,
                "name": "Men's Jeans",
                "description": "Classic fit men's jeans available in various sizes and colors",
                "type": "clothing",
                "price": 29.99
            },
            {
                "id": 10,
                "name": "Women's Sweater",
                "description": "Cozy and warm women's sweater, perfect for cold weather",
                "type": "clothing",
                "price": 24.99
            },
            {
                "id": 11,
                "name": "Leather Jacket",
                "description": "Stylish and durable men's leather jacket",
                "type": "clothing",
                "price": 99.99
            },
            {
                "id": 12,
                "name": "Unisex Hoodie",
                "description": "Comfortable hoodie for all seasons, available in different colors",
                "type": "clothing",
                "price": 34.99
            },
            {
                "id": 13,
                "name": "Men's Sneakers",
                "description": "Sporty and comfortable men's sneakers",
                "type": "clothing",
                "price": 49.99
            },
            {
                "id": 14,
                "name": "Women's Sandals",
                "description": "Casual and stylish sandals for women",
                "type": "clothing",
                "price": 19.99
            }]);
    });

    it('should return 404 with no matching id', async () => {
        const res = await request(app).get('/api/products/type/cars');
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual({});
    });

});

describe('Get /api/fake', () => {
    it ('should return 404', async () => {
        const res = await request(app).get('/api/fake');
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual({});
    });
});