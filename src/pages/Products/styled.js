import styled from "styled-components";

export const ProductWrapper = styled.div`
  margin-bottom: 20px;
  div.product-grid {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #fff;
    padding: 20px 0 0 0;
    &:hover {
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
    }
    div.product-image-container {
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-bottom: 1px solid var(--colorBorder);

      a.link-image {
        width: 80%;

        img.product-image {
          width: 100%;
          height: auto;
          transition: all 0.3s ease-in-out;
        }
      }

      a.add-cart {
        align-self: flex-end;
        background: #808080;
        width: 40px;
        height: 40px;
        color: #fff;
        line-height: 40px;
        text-align: center;
        transform: translate(100%, 100%);
        border-radius: 5px 0 0 0;
        transition: all 0.3s ease-in-out;
        &:hover {
          background: #000;
        }
      }

      &:hover .add-cart {
        transform: translate(0, 0);
      }

      &:hover img.product-image {
        transform: scale(1.2);
      }
    }
    div.product-content {
      display: flex;
      justify-content: space-between;
      padding: 5px 10px;
      font-family: "Anton", sans-serif;
    }
  }
`;
