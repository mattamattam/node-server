import { InventoryType } from "./inventoryType";

export interface Product {
    id: number;
    name: string;
    description: string;
    type: InventoryType;
    price: number;
}
