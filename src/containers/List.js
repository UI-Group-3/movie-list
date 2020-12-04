import React, { Component } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
import { connect } from "react-redux";
import { ListWrapper, ListItem } from './ListStyle';
import Sort from '../components/Sort';
import ListItemBottom from '../components/ListItemBottom'
import * as actionCreators from '../redux/actionCreators'
import { MOVIE_LIST_API } from '../redux/actionConstants'

class List extends Component {

    fetchData = async () => {
        const { handleFecthMovieList } = this.props;
        for (let i = 1; i <= 500; i++) {
            const response = await axios.get(`${MOVIE_LIST_API}${1}`);
            // console.log(response.data);
            // console.log(response.data.results);
            handleFecthMovieList(response.data.results);
        }

    };

    // fetchData2 = async () => {
    //     const { handleFecthMovieList } = this.props;
    //     for (let i = 1; i <= 500; i++) {
    //         const response = await axios.get(`${MOVIE_LIST_API}${i}`);
    //         // console.log(response.data);
    //         // console.log(response.data.results);
    //         handleFecthMovieList(response.data.results);
    //     }

    // };


    componentDidMount() {
        // // const url = "https://jsonplaceholder.typicode.com/photos";

        // for (let i = 1; i <= 500; i++) {
        //     async fetch()
        //         .then((res) => res.json())
        //         .then((res) => {
        //             handleFecthMovieList(res);
        //             console.log(res);
        //         });
        // }
        this.fetchData();
        // this.fetchData2();
    }

    getItemBottom(mouseIn) {
        const { isLiked, handleClickLiked } = this.props
        if (mouseIn) {
            return (
                <ListItemBottom handleClickLiked={handleClickLiked} isLiked={isLiked}></ListItemBottom>
            )
        }
        else {
            return null;
        }
    }

    render() {
        const { mouseIn, handleMouseEnter, handleMouseLeave, sortList, movieLists } = this.props;
        // console.log(movieLists);
        
        return (
            <ListWrapper>
                <Sort sortList={sortList}></Sort>
                {
                    // movieLists.map(movie =>
                        <ListItem onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave} >
                            {this.getItemBottom(mouseIn)}
                        </ListItem>
                    // )
                }


            </ListWrapper>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        mouseIn: state.listState.mouseIn,
        isLiked: state.listState.isLiked,
        sortList: state.listState.sortList,
        movieLists: state.listState.movieLists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleClickLiked() {
            dispatch(actionCreators.clickLiked());
        },
        handleFecthMovieList(data) {
            dispatch(actionCreators.getMovieList(data));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

// const List = () => {
//     const dispatch = useDispatch();
//     // const [isClicked, setClicked] = useState(false);
//     useEffect(() => {
//         axios.get(GENRES_API)
//             .then(res => {
//                 dispatch(getMovieGenres(res.data.genres))
//             })
//             .catch(err => {

//             })
//     }, [dispatch])

//     const genres_lists = useSelector(selectCategories);

//     return (

//         <CategoryDiv>
//             <h1>Select Movie</h1>
//             {
//                 genres_lists.map(genres_list => (
//                     <CategoryItem key={genres_list.id} genres_list={genres_list} />
//                 ))
//             }


//         </CategoryDiv>
//     )
// };

// export default List;