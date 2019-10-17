import styled from "styled-components";

export const HeaderWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Anton&display=swap");
  height: 80px;
  a {
    text-decoration: none;
    color: #000;
    h1 {
      line-height: 80px;
      margin: 0;
      font-family: "Anton", sans-serif;
    }
  }

  @media (max-width: 768px) {
    h1 {
      text-align: center;
    }
  }
`;
