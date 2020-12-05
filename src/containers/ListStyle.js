import styled from 'styled-components';

export const ListWrapper = styled.div`
    overflow:hidden;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width:1100px;
    margin:0 auto;
    box-sizing:border-box;
`;

export const SortWrapper = styled.div`
    border-top:1px solid #eee;
    width:100%;
    color:#666;
    font-size:14px;
`;

export const SortItem = styled.div`
    float:left;
    margin:15px 20px 15px 0;
`;

export const ItemWrapper = styled.div`
    position:relative;
    box-sizing:border-box;
    width:200px;
    height:250px;
    margin-bottom:60px ;
`;

export const ItemBottomWrapper = styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    bottom:0;
    width:100%;
    height:20%;
    background-color: rgba(240,243,245,0.5) ;
`;

export const SortInput = styled.input.attrs({
    type: "radio",
    name: "sort"
})`
    width:12px;
    height:12px;
`;

export const Liked = styled.div`
    margin-right:25px;    
`;

export const Blocked = styled.div`
    float:left;
    margin-right:25px
`;

export const Details = styled.div`
    float:left;
    margin-right:25px
`;

export const MovieTitle = styled.div`
    text-align:center;
    margin-bottom:5px;
`;

export const MovieYear = styled.div`
    text-align:center;
`;

export const MovieImg = styled.img.attrs({
    alt: ""
})`
    width:100%;
    height:100%
`;
