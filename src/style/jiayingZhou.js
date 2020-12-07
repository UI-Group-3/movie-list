import styled from "styled-components";

export const CategoryDiv = styled.div`
  width: 1100px;
  margin: 0 auto;
  @media (max-width:655px ) {
      display:none;   
  }
  @media (max-width: 767px) {
    width:80%;
    font-size:14px;
  }
  @media (min-width:768px ) {  
          width: 750px;         
  }
  @media (min-width:992px ) {
          width: 970px;
  }
  @media (min-width: 1199px) {
          width: 1100px;
  }
`;

export const CategoryLabel = styled.label`
  display: inline-block;
  zoom: 1;
  cursor: pointer;
  padding: 5px 10px;
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
  @media (max-width: 767px) {
    font-size:14px;
    margin: 0 2px 2px 0;
  }
  @media (min-width:768px ) {  
    font-size:15px; 
    margin: 0 3px 3px 0;      
}
@media (min-width:992px ) {
  font-size:17px;
  margin: 0 10px 10px 0;
}

`;

export const CategoryInput = styled.input`
  display: none;
  font-size: 16px;
  vertical-align: middle;
`;
