# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Button, Badge } from "react-bootstrap";
import Search from "./Search";
import "../App.css"; // Assuming your custom styles are in this CSS file

const Service = () => {
const [data, setData] = useState([]);
const [filteredData, setFilteredData] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [category, setCategory] = useState("");

const fetchProducts = async () => {
try {
const response = await axios.get("https://dummyjson.com/products");
setData(response.data.products);
setFilteredData(response.data.products);
// console.log(first)
} catch (error) {
console.error("Failed to fetch data", error);
}
};

useEffect(() => {
fetchProducts();
}, []);

useEffect(() => {
const results = data.filter((item) => {
return (
item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
(category ? item.category === category : true)
);
});
setFilteredData(results);
}, [searchTerm, category, data]);

return (
<>
<Container>
<Row className="text-center mt-4 mb-4">
<h1>Our Products</h1>
<p>Explore top-quality products across various categories!</p>
<Search
            onSearchChange={setSearchTerm}
            onCategoryChange={setCategory}
          />
</Row>
<Row xs={1} md={4} className="g-4">
{filteredData.map((item) => {
console.log(item);
return (
<Col key={item.id}>
<Card className="h-100 product-card shadow">
<Card.Img
variant="top"
src={item.images[0]}
className="product-img"
/>
<Card.Body>
<Card.Title>{item.title}</Card.Title>
<Card.Text className="product-description">
{item.description.substring(0, 100)}...
</Card.Text>
<Card.Text className="product-price">
<strong>${item.price}</strong>
{item.discountPercentage > 0 && (
<Badge bg="success" className="discount-badge">
-{item.discountPercentage}%
</Badge>
)}
</Card.Text>
{/_ Manually pass stock data here _/}
{item.id === 2 ? ( // Assuming you want to manually control the stock for the first product
<Button variant="primary">Buy Now</Button>
) : item.id === 3 ? ( // Assuming no stock for the second product
<Button variant="secondary" disabled>
Out of Stock
</Button>
) : (
<Button variant="primary">Buy Now</Button> // Default case for all other products
)}
</Card.Body>
<Card.Footer>
<small className="text-muted">
Rating: {item.rating.toFixed(1)} / 5
</small>
</Card.Footer>
</Card>
</Col>
);
})}
</Row>
</Container>
</>
);
};

export default Service;
