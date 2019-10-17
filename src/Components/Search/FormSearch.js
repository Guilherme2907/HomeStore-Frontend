import React from "react";
import { Form, FormControl } from "react-bootstrap";

import { ProductConsumer } from "../../store/ProductContext";

import { SearchWrapper } from "./styled";

export default function FormSearch() {
  return (
    <SearchWrapper>
      <ProductConsumer>
        {value => {
          const { handleSubmit, handleSearch } = value;
          return (
            <Form onSubmit={handleSubmit}>
              <div className="search">
                <button type="submit" className="search-btn">
                  <i className="fas fa-search" />
                </button>
                <FormControl
                  type="text"
                  value={value.search}
                  onChange={e => handleSearch(e)}
                />
              </div>
            </Form>
          );
        }}
      </ProductConsumer>
    </SearchWrapper>
  );
}
