import styled from "styled-components";
import media from "styled-media-query";

export const NavWrapper = styled.div`
  .nav-menu {
    margin: 0;
    padding: 0;
    .menu {
      width: 100%;
      display: flex;
      flex-direction: column;
      li {
        border-top: 1px solid var(--colorBorder);
        height: 40px;
        line-height: 40px;
        a {
          padding: 0;
        }
        &:last-child {
          border-bottom: 1px solid var(--colorBorder);
        }
      }
    }
  }

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    .menu li {
      text-align: center;
      border: none !important;
      padding: 15px 0;
      &:last-child {
        border: none;
      }
    }

    .nav-menu {
      margin-top: 20px;
      border-top: 1px solid var(--colorBorder);
      border-bottom: 1px solid var(--colorBorder);
      padding: 15px 0;
      .button-collapse {
        margin: 0 auto;
        &:focus {
          outline: none;
        }
      }
    } 
  `}
`;
