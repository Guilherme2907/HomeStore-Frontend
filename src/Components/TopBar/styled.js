import media from "styled-media-query";
import styled from "styled-components";


export const TopbarWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--colorBorder);

  div.cart a {
    margin-right: 10px;
    text-decoration: none;
    color: black;
  }

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    div.cart {
      .checkout {
      display:none;
      }

      .cart span {
        display:none;
      }
    }
    
  `}
`;