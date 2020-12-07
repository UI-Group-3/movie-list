import styled from "styled-components";

export const DetailWrapper = styled.div`
    position:relative;
    background: url(${(props) => props.imgUrl});
    background-size:100% 100%;
    font-family: Georgia, serif; 
    margin:10px auto; 
    width: 80%;
    height:70%;
    @media (min-width: 1199px) {
        width: 1100px;
        height:500%
      }
`;

export const Close = styled.button`
    display:block;
    margin:0 auto; 
    width: 80px;
    height: 30px;
    border-radius:5px;
    border:none;
    outline:none;
    font-size:20px;
    font-weight:bolder;
`;

export const Upper = styled.div`   
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
    height: 100%;
    width: 100%;
    background:rgba(0, 0,0, 0.6);
    z-index:1;
`;

export const LeftImg = styled.img.attrs({
    alt: ""
})`
  width: 30%;
  height: 80%;
  margin-right: 100px;
  z-index: 99;
`;

export const RightWrapper = styled.div` 
    width:45%;
    height:80%;
    z-index: 99;
    color: white;
    font-size: 18px;
`;

export const MoiveName = styled.h1`
    font-size:24px;
    margin: 20px 0;
`;

export const GenresWrapper = styled.ul`
  overflow: hidden;
  margin: 20px 0;
`;

export const GenresItem = styled.li`
    float: left;
    height: 25px;
    padding: 5px;
    font-size:14px;
    text-align: center;
    line-height: 25px;
    margin: 0 10px 10px 0;
    border-radius: 4px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

export const MoiveOverView = styled.div`
    width: 100%;
    overflow:auto;
    margin: 20px 0;
`;


