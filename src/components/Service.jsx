import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Button } from "react-bootstrap";
import Search from "./Search";
import Dummy from "./Dummy";

const Service = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [Serachterm, setSerachterm] = useState("");
  const [category, setCategory] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products);
      setFilteredData(response.data.products);
      console.log(response.data.products);
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
        item.title.toLowerCase().includes(Serachterm.toLowerCase()) &&
        (category ? item.category === category : true)
      );
    });
    setFilteredData(results);
  }, [Serachterm, category, data]);

  console.log("data filtered", filteredData);
  return (
    <>
      <Container>
        {/* <Dummy dataone={data} />; */}
        <Row className="text-center mt-4 mb-4">
          <h1>Service</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            laboriosam.
          </p>
          <Search
            onSearchChange={setSerachterm}
            onCategoryChange={setCategory}
          />
        </Row>
        <Row xs={1} md={3} className="g-4">
          {filteredData.map((item) => {
            return (
              <Col key={item.id}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={item.images[0]}
                    style={{ height: "300px" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>${item.price}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
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

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Card, Button } from "react-bootstrap";
// import Search from "./Search";

// const Service = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("https://dummyjson.com/products");
//       setData(response.data.products);
//       setFilteredData(response.data.products);
//     } catch (error) {
//       console.error("Failed to fetch data", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const results = data.filter(
//       (item) =>
//         item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedCategories.length === 0 ||
//           selectedCategories.includes(item.category))
//     );
//     setFilteredData(results);
//   }, [searchTerm, selectedCategories, data]);

//   return (
//     <>
//       <Container>
//         <Row className="text-center mt-4 mb-4">
//           <h1>Service</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
//             laboriosam.
//           </p>
//           <Search
//             onSearchChange={setSearchTerm}
//             onCategoryChange={setSelectedCategories}
//             selectedCategories={selectedCategories}
//           />
//         </Row>
//         <Row xs={1} md={3} className="g-4">
//           {filteredData.map((item) => (
//             <Col key={item.id}>
//               <Card className="h-100">
//                 <Card.Img
//                   variant="top"
//                   src={item.images[0]}
//                   style={{ height: "300px" }}
//                 />
//                 <Card.Body>
//                   <Card.Title>{item.title}</Card.Title>
//                   <Card.Text>{item.description}</Card.Text>
//                   <Card.Text>${item.price}</Card.Text>
//                   <Button variant="primary">Buy Now</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Service;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Card, Button } from "react-bootstrap";
// import Search from "./Search";

// const Service = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [maxPrice, setMaxPrice] = useState(2000);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("https://dummyjson.com/products");
//       setData(response.data.products);
//       setFilteredData(response.data.products);
//     } catch (error) {
//       console.error("Failed to fetch data", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const results = data.filter(
//       (item) =>
//         item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedCategories.length === 0 ||
//           selectedCategories.includes(item.category)) &&
//         item.price <= maxPrice
//     );
//     setFilteredData(results);
//   }, [searchTerm, selectedCategories, maxPrice, data]);

//   return (
//     <>
//       <Container>
//         <Row className="text-center mt-4 mb-4">
//           <h1>Service</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
//             laboriosam.
//           </p>
//           <Search
//             onSearchChange={setSearchTerm}
//             onCategoryChange={setSelectedCategories}
//             selectedCategories={selectedCategories}
//             onPriceChange={setMaxPrice}
//             maxPrice={maxPrice}
//           />
//         </Row>
//         <Row xs={1} md={3} className="g-4">
//           {filteredData.map((item) => (
//             <Col key={item.id}>
//               <Card className="h-100">
//                 <Card.Img
//                   variant="top"
//                   src={item.images[0]}
//                   style={{ height: "300px" }}
//                 />
//                 <Card.Body>
//                   <Card.Title>{item.title}</Card.Title>
//                   <Card.Text>{item.description}</Card.Text>
//                   <Card.Text>${item.price}</Card.Text>
//                   <Button variant="primary">Buy Now</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Service;
