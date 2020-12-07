import styled from "styled-components";

export const ListWrapper = styled.article`
  overflow: hidden;
  &.List {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &.otherList {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
  
  @media (max-width: 767px) {
    width:80%;
    &.List,&.otherList{
      justify-content: center;
      }  
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

export const SortWrapper = styled.section`
  border-top: 1px solid #eee;
  width: 100%;
  color: #666;
  font-size: 14px;
  @media (max-width:655px ) {
    display:none;   
}
`;

export const SortItem = styled.section`
  float: left;
  margin: 15px 20px 15px 0;
`;

export const SortInput = styled.input.attrs({
  type: "button",
  name: "sort",
})`
  width: 128px;
  height: 32px;
  border: none;
  outline: none;
  background-color: #f0f3f5;
`;

export const ItemWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 200px;
  height: 320px;
  margin-right: 20px;
  margin-top: 10px;
`;

export const MovieImgs = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    .ItemBottom {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      width: 100%;
      height: 20%;
      background-color: rgba(240, 243, 245, 0.5);
    }
  }
`;

export const MovieInfo = styled.p`
  text-align: center;
  margin: 5px 0;
`;

export const ItemBottomWrapper = styled.div`
  display: none;
`;

export const Liked = styled.button`
  margin-right: 25px;
  background: none;
  border: none;
  outline: none;
`;

export const Blocked = styled.button`
  float: left;
  background: none;
  border: none;
  outline: none;
  margin-right: 25px;
`;

export const Details = styled.div`
  float: left;
  margin-right: 25px;
`;
