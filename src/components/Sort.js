import React from 'react'
import { SortWrapper, SortItem,SortInput, } from '../containers/ListStyle';

const Sort = ({sortList})=> {
        return (
            <SortWrapper>
                {sortList.map((item) => {
                    return (
                        <SortItem key={item}>
                            <label htmlFor={item} >
                                <SortInput id={item}></SortInput>
                                {item}
                            </label>
                        </SortItem >)
                })}
            </SortWrapper>
        )
    }


export default Sort;