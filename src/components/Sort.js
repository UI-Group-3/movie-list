import React from 'react'
import { SortWrapper, SortItem, SortInput, } from '../containers/ListStyle';


const Sort = ({ sortBy, handleClickSort }) => {

    return (
        <SortWrapper>
            {sortBy.map((item) => {
                return (
                    <SortItem key={item.id} >
                        <label htmlFor={item.id} >
                            <SortInput id={item.id} onClick={() => { handleClickSort(item.id) }}></SortInput>
                            {item.name}
                            {item.isSort ? (<i className="iconfont up">&#xe614;</i>) : (<i className="iconfont up">&#xe61d;</i>)}
                        </label>

                    </SortItem >)
            })}
        </SortWrapper>
    )
}



export default Sort;