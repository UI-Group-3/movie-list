import styled from "styled-components";

export const CategoryDiv = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

export const CategoryLabel = styled.label`
  display: inline-block;
  zoom: 1;
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 10px 10px 0;
  box-sizing: border-box;
  font-size: 17px;
  font-weight: 500;
  color: #666;
  border-radius: 2px;
  background: none;
  vertical-align: middle;
  &.active {
    background: #3270ae;
    color: #fff;
  }
  &.activeHover {
    &:hover {
      background: #eee;
    }
  }
`;

export const CategoryInput = styled.input`
  display: none;
  font-size: 16px;
  vertical-align: middle;
`;
