import React from "react";
import { FaSearch } from "react-icons/fa";

import NavBar from "../components/navbar";

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.pricegram}</p>
            <p>Quantity in grams: {product.quantitygram}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default class Market extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      products: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    //endpoint for api gateway
    const url = "https://j3wcner5ag.execute-api.us-east-1.amazonaws.com/items";
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ products: data.Items });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  handleSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { searchTerm, products } = this.state;

    return (
      <div>
        <NavBar />
        <h3>this is the market</h3>
        <div className="search">
          <input
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={this.handleSearch}
          />
          <button>
            <FaSearch />
          </button>
        </div>

        <h2>Products</h2>
        <ProductList products={products} />
        {/* 
        <h2>Popular Deals</h2>
        <ProductList
          products={sortedProducts.filter((product) => product.isPopular)}
        />

        <h2>New Items</h2>
        <ProductList
          products={sortedProducts.filter((product) => product.isNew)}
        /> 
        */}

      </div>
    );
  }
}
