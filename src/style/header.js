import styled, { keyframes } from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 144px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f0f3f5;
`;

export const Up = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  width: 1100px;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #e5ebe4;
`;

export const Down = styled.div`
  height: 48px;
  width: 1100px;
  font-size: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const NavItem = styled.li`
  float: left;
  padding: 8px;
  margin-right: 64px;
  font-size: 24px;
  font-weight: bold;
  color: #2278b5;
  &:hover {
    background: #e8ebed;
  }
  &.afterClick {
    background:#2278b5;
    color:white;
  }
  @media (max-width: 1199px) {
    margin: 32px;
    text-align:center;
}
`;

export const TMDBIcon = styled.img`
  &.top {
    height: 32px;
  }
  &.side {
    height: 16px;
  }
`;

export const Search = styled.div`
  position:relative;  
  height: 64px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &.top {
    width: 400px;
  }
  &.side {
    width: 225px;
  }
  .zoom{
    position: absolute;
    font-size:20px;
    top:16px;
    right: 0px;
    width:32px;
    height: 33px;
    line-height: 33px;
    text-align: center;
    border-radius:0 5px 5px 0;
    background: #888;
  }
`;

export const SearchText = styled.input.attrs({
  type: "text",
  placeholder: "Please input a movie name!"
})`
  height: 32px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  background: #fff;
  margin: 8px 20px;
  padding:0 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
`;

export const SearchInfo = styled.div`
  position:absolute;
  left:20px;
  top: 50px;
  width: 350px;
  color:#666;
  font-size:13px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;  
`;

export const SearchItem = styled.div`
  width:100%;
  box-sizing:border-box;
  padding:5px 10px;
  line-height:100%;
  text-decoration:none;
  border-bottom:1px solid #eee;
  display: flex;
  justify-content: flrx-start;
  img {
    width:30px;
    height:40px;
    margin-right:10px
  }
  p {
    color:#2278b5;
    margin-bottom:5px;
  }
  span {
    color:#666;
  }  
`;

export const showAnim = keyframes`
    0% {transform: translate(-256px, 0)}
    100% {
        transform: translate(0, 0);
        left: 0;
    }
`;

export const hideAnim = keyframes`
    0% {transform: translate(0, 0)}
    100% {transform: translate(-256px, 0)}
`;

export const Side = styled.div`
  z-index: 999;
  margin: 0;
  padding: 0;
  width: 256px;
  background-color: #f0f3f5;
  position: fixed;
  top: 0;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  animation-duration: 1s;
  animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  &.show {
    animation-name: ${showAnim};
  }
  &.hide {
    animation-name: ${hideAnim};
  }
  
  
`;

export const SideButton = styled.button`
  z-index: 999;
  font-size: 32px;
  cursor: pointer;
  background-color: #f0f3f5;
  color: black;
  padding: 4px 10px;
  border: none;
  border-radius: 16px;
  position: fixed;
  bottom: 32px;
  left: 32px;

  &:hover {
    color: #2278b5;
  }
`;
