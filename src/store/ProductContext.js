import React, { Component } from "react";

import api from "../services/api";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    categories: [],
    search: "",
    productDetails: {},
    cart: []
  };

  componentDidMount() {
    this.setCategories();
    this.setProducts();
  }

  setCategories = async () => {
    const response = await api.get("/categorias");
    this.setState({ ...this.state, categories: response.data });
  };

  setProducts = async (name = "") => {
    const response = await api.get(`/produtos?nome=${name}`);
    this.setState({ ...this.state, products: response.data.content });
  };

  handleCategory = async categoryId => {
    const response = await api.get(`/produtos?categorias=${categoryId}`);
    this.setState({ ...this.state, products: response.data.content });
  };

  handleSearch = event => {
    this.setState({ ...this.state, search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setProducts(this.state.search);
    this.props.history.push("/");
  };

  handleDetails = product => {
    this.setState({ ...this.state, productDetails: product });
  };

  addProductToCart = product => {
    const cart = this.state.cart;
    const productsInCart = cart.map(product => product.id);
    if(productsInCart.includes(product.id)) {
      return;
    }
    let cartProduct = {...product,quantity:1,incart:true}
    const total = cartProduct.preco * cartProduct.quantity
    cartProduct = {...cartProduct,total}
    this.setState({ ...this.state, cart: [...this.state.cart, cartProduct] });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleCategory: this.handleCategory,
          setProducts: this.setProducts,
          handleSearch: this.handleSearch,
          handleSubmit: this.handleSubmit,
          handleDetails: this.handleDetails,
          addProductToCart: this.addProductToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
