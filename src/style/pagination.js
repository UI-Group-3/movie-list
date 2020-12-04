import styled from 'styled-components';

export const PaginationWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    margin:10px 0;
    color:#666
`;

export const Button = styled.button.attrs({
    type:"button"
})`
    width:40px;
    padding:5px 5px;
    margin:0 20px;
    height:40px;
    outline: none;
    border:1px solid #eee;
    border-radius: 100%; 
   
`;

export const PageInfo = styled.div`
    margin:0 10px;
    text-align:center;
`;


