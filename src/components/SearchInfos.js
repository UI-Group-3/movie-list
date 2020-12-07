import React from "react";
import { selectSearchList } from '../redux/selectors'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { setItemDetailValue, setSearchNull } from '../redux/actionCreators';
import { SearchItem, SearchInfo } from "../style/header";

const SearchInfos = () => {
    const dispatch = useDispatch();
    const searchList = useSelector(selectSearchList);
    console.log(searchList);
    const originalImg = "https://image.tmdb.org/t/p/original";

    function handelSeach(id) {
        return Promise.resolve(dispatch(setItemDetailValue(id))).then(
            () => dispatch(setSearchNull()));
    }

    return (

        <SearchInfo >
            {
                searchList.map((item) => {
                    return (
                        <Link to="/detail" style={{ textDecoration: "none" }}>
                            <SearchItem key={item.id} onClick={() => handelSeach(item.id)}>
                                <img alt="" src={`${originalImg}${item.poster_path}`}></img>
                                <div>
                                    <p >{item.title}</p>
                                    <span>{item.release_date}</span>
                                </div>
                            </SearchItem>
                        </Link>

                    )
                })
            }
        </SearchInfo>

    );
}

export default SearchInfos;
