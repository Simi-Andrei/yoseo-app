import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import { encodeCredentials } from "./utils/encodeCredentials.js";
// import testRoutes from "./routes/testRoutes.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/getProducts", async (req, res) => {
  try {
    const endpoint =
      "https://simi-first-store.myshopify.com/admin/api/2024-04/products.json";
    const username = "c2d843603a52c21abdf9f84998151b8e";
    const password = "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";
    const authHeader = {
      Authorization: `Basic ${encodeCredentials(username, password)}`,
    };
    const response = await axios.get(endpoint, { headers: authHeader });
    const products = response.data.products;
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
