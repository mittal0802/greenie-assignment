import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  display: flex;
  margin: 30px auto 30px auto;
  width: 30%;
  background: white;
  border-radius: 7.91992px;
  padding: 10px;
  height: 30px;
  align-items: center;
  outline: none;
  font-size: 18px;
  border-radius: 5px;
  font-weight: bold;

  input {
    flex: 1;
    border: none;
    width: 100%;
    color: black;
    background: none;
    outline: none;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-weight: bold;

    /* Clear button styles */
    &::-webkit-search-cancel-button {
      size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    margin: 10px auto 10px auto;
    width: 55%;
    height: 20px;
    font-size: 14px;
  }
`;

export const SearchIcon = styled("i").attrs({ className: "fa fa-search" })`
  margin-right: 15px;
  color: #6e6f72;
`;
