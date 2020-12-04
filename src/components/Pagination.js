import {PaginationWrapper,Button,PageInfo} from '../style/pagination';
import React from 'react';

const Pagination = () =>{
    return (
        <PaginationWrapper>
            <Button>pre</Button>
            <PageInfo>current page 1 / 500</PageInfo>
            <Button>next</Button>
        </PaginationWrapper>
    )

}

export default Pagination;