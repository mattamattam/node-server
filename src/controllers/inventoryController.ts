import { Request, Response } from 'express';
import { InventoryType } from '../models/inventoryType';
import { getAllInventory, getInventoryById, getInventoryByType, getInventoryTotalCost } from '../services/inventoryService';

export const getProductsTotalCost = async (req: Request, res: Response) => {
    const totalCost = await getInventoryTotalCost();
    res.status(200).json({ "totalCost": totalCost});
};

export const getProductsByType = (req: Request, res: Response) => {
    const inventoryType : InventoryType = req.params.type as InventoryType;
    const items = getInventoryByType(inventoryType);
    if (items.length > 0) {
        res.status(200).json(items);
    } else {
        res.status(404).send("No products of this type found.");
    }
};

export const getProductById = (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    const item = getInventoryById(productId);
    if (item != null) {
        res.status(200).json(item);
    } else {
        res.status(404).send("Product Not Found");
    }
};

export const getAllProducts = (req: Request, res: Response) => {
    res.status(200).json(getAllInventory());
}