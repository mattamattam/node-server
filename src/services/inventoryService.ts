import { Inventory } from '../models/inventory';
import { InventoryType } from '../models/inventoryType';
import { Product } from '../models/product';

const inventory : Inventory = require('../data/inventory.json');

export const getInventoryTotalCost = async () : Promise<number> => {
    const totalCost = inventory.products.reduce((acc, curr) => acc + curr.price, 0);
    return totalCost;
};

export const getInventoryByType = (inventoryType: InventoryType) : Product[] => {
    const items = inventory.products.filter(x => x.type == inventoryType);
    return items;
};

export const getInventoryById = (productId: number) : Product | null => {
    const item = inventory.products.filter(x => x.id === productId);
    if (item.length > 0)
    {
        return item[0];
    }
    return null;
};

export const getAllInventory = () : Product[] => {
    return inventory.products;
}