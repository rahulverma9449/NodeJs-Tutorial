// Please don't change the pre-written code
// Import the necessary modules here

import ProductModel from "../models/ProductModel.js";

const productModel = new ProductModel();
export default class productController {
  index = (req, res) => {
    res.render("index", { products: productModel.getAllProducts() });
  };

  search = (req, res) => {
    // Write your code here
    const searchQuery = req.body.name; // Assuming the search query is sent as part of the request body
    console.log(searchQuery);
    // Implement the search logic using the ProductModel
    const searchResults = productModel.searchResult(searchQuery);

    // Render the search result view
    res.render("searchResult", { products: searchResults });
  };
}
