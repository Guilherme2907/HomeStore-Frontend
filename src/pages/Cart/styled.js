import styled from "styled-components";

export const CartColumnsWrapper = styled.div`
  font-family: "Anton", sans-serif;
  margin-bottom: 20px;
  h5 {
    font-size: 16px;
  }
`;

export const CartItemWrapper = styled.div`
  font-family: "Anton", sans-serif;
  border-bottom: 1px solid var(--colorBorder);
  .cart-item-row {
    text-align: center;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #808080;
      font-size: 16px;
      p,
      span {
        padding-bottom: 5px;
      }
      .fa-trash {
        font-size: 16px;
      }
    }

    .quantity-column {
      .counter {
        display: flex;
        justify-content: space-between;
        width: 100%;
        span {
          border: 1px solid #808080;
          padding: 0 10px;
          color: #fff;
          background: #808080;
          cursor: pointer;
          &:hover {
            background: #000;
            border: 1px solid #808080;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .cart-item-row {
      div {
        justify-content: space-between;
      }

      .quantity-column {
        .counter {
          width: 30%;
        }
      }
    }
  }
`;
