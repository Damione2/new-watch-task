import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import productsData from './products.json';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('default');
  const [filterOptions, setFilterOptions] = useState({
    color: 'all',
    price: 'all',
    brand: 'all',
    dialColor: 'all',
    targetGroup: 'all',
    material: 'all',
    diameter: 'all',
    strapType: 'all',
    movement: 'all',
    special: 'all'
  });
  const [loadMoreCount, setLoadMoreCount] = useState(1);

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  useEffect(() => {
    let newFilteredProducts = [...products];
    if (filterOptions.color !== 'all') {
      newFilteredProducts = newFilteredProducts.filter(product => product.color === filterOptions.color);
    }
    if (filterOptions.price !== 'all') {
      if (filterOptions.price === 'lessThan50') {
        newFilteredProducts = newFilteredProducts.filter(product => product.price < 50);
      } else if (filterOptions.price === '50to100') {
        newFilteredProducts = newFilteredProducts.filter(product => product.price >= 50 && product.price <= 100);
      } else if (filterOptions.price === 'moreThan100') {
        newFilteredProducts = newFilteredProducts.filter(product => product.price > 100);
      }
    }
    if (filterOptions.brand !== 'all') {
      newFilteredProducts = newFilteredProducts.filter(product => product.brand === filterOptions.brand);
    }
    if (filterOptions.dialColor !== 'all') {
      newFilteredProducts = newFilteredProducts.filter(product => product.dialColor === filterOptions.dialColor);
    }
    if (filterOptions.targetGroup !== 'all') {
      newFilteredProducts = newFilteredProducts.filter(product => product.targetGroup === filterOptions.targetGroup);
    }
    if (filterOptions.material !== 'all') {
      newFilteredProducts = newFilteredProducts.filter(product => product.material === filterOptions.material);
    }
    if (filterOptions.diameter !== 'all') {
      newFilteredProducts = newFilteredProducts.filter(product => product.diameter === filterOptions.diameter);
    }
    if (filterOptions.strapType !== 'all') {
      newFilteredProducts = newFilteredProducts.filter(product => product.strapType === filterOptions.strapType);
    }
    if (filterOptions.movement !== 'all') {
      newFilteredProducts = newFilteredProducts.filter(product => product.movement === filterOptions.movement);
    }
    if (filterOptions.special !== 'all') {
      newFilteredProducts = newFilteredProducts.filter(product => product.special === filterOptions.special);
    }
    setFilteredProducts(newFilteredProducts);
    setLoadMoreCount(1);
  }, [filterOptions]);

  useEffect(() => {
    let newSortedProducts = [...filteredProducts];
    if (sortOption === 'alphabeticalAZ') {
      newSortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'alphabeticalZA') {
      newSortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'priceAscending') {
      newSortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceDescending') {
      newSortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(newSortedProducts);
  }, [sortOption]);

  const handleSortChange = e => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = e => {
    setFilterOptions({ ...filterOptions, [e.target.name]: e.target.value });
  };

  const handleLoadMoreClick = () => {
    setLoadMoreCount(loadMoreCount + 1);
  };

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h1>Product Listing Page</h1>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <h5>Filters</h5>
          <Form.Group controlId="brandFilter">
            <Form.Label>Brand</Form.Label>
            <Form.Control as="select" name="brand" onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="brand1">Brand 1</option>
              <option value="brand2">Brand 2</option>
              <option value="brand3">Brand 3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="dialColorFilter">
            <Form.Label>Dial Color</Form.Label>
            <Form.Control as="select" name="dialColor" onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="blue">Blue</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="targetGroupFilter">
            <Form.Label>Target Group</Form.Label>
            <Form.Control as="select" name="targetGroup" onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="unisex">Unisex</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="materialFilter">
            <Form.Label>Material</Form.Label>
            <Form.Control as="select" name="material" onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="stainlessSteel">Stainless Steel</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="diameterFilter">
            <Form.Label>Diameter</Form.Label>
            <Form.Control as="select" name="diameter" onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="&lt;30mm">&lt;30mm</option>
              <option value="&lt;40mm">&lt;40mm</option> 
              <option value=">40mm">>40mm</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="strapTypeFilter">
            <Form.Label>Strap Type</Form.Label>
            <Form.Control as="select" name="strapType" onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="leather">Leather</option>
              <option value="metal">Metal</option>
              <option value="rubber">Rubber</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="movementFilter">
            <Form.Label>Movement</Form.Label>
            <Form.Control as="select" name="movement" onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="quartz">Quartz</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="specialFilter">
            <Form.Label>Special</Form.Label>
            <Form.Control as="select" name="special" onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="limitedEdition">Limited Edition</option>
              <option value="newArrival">New Arrival</option>
              <option value="onSale">On Sale</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={9}>
          <Row className="mb-3">
            <Col md={6}>
              <h5>{filteredProducts.length} products found</h5>
            </Col>
            <Col md={6}>
              <Form.Group controlId="sortSelect">
                <Form.Label>Sort by:</Form.Label>
                <Form.Control as="select" onChange={handleSortChange}>
                  <option value="default">Default</option>
                  <option value="alphabeticalAZ">Alphabetical A-Z</option>
                  <option value="alphabeticalZA">Alphabetical Z-A</option>
                  <option value="priceAscending">Price ascending</option>
                  <option value="priceDescending">Price descending</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {filteredProducts.slice(0, loadMoreCount * 20).map(product => (
              <Col md={3} key={product.id}>
                <Card className="mb-3">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>${product.price}</Card.Text>
                    <Button variant="primary">Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {loadMoreCount * 20 < filteredProducts.length && (
            <Row className="my-3">
              <Col className="text-center">
                <Button onClick={handleLoadMoreClick}>Load more</Button>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListingPage;
