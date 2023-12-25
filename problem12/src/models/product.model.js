// Import the necessary modules here
import { products } from "../assets/products.js"

export default class ProductModel {
    fetchProducts = (req, res) => {
        // Write your code here
        return products;
    };
}