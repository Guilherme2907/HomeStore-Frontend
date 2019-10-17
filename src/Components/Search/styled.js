import styled from "styled-components";

export const SearchWrapper = styled.div`
  form {
    div.search {
      display: flex;
      align-items: center;
      i {
        margin-right: 10px;
        font-size: 20px;
      }

      input.form-control {
        border: none;
        background: var(--mainBody);
        &:focus {
          box-shadow: none;
        }
      }
    }

    .search-btn {
      border: none;
      background: transparent;
    }
  }
`;

