import React, { useEffect, memo } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Category from './containers/Category';
import Header from './containers/Header';
import List from './containers/List';
import ListItem from './components/ListItem';
import MovieDetail from './containers/MovieDetail';
import { ListWrapper } from './style/ListStyle';
import { browserHistory } from 'react-router'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { GENRES_API, MOVIE_LIST_API } from './redux/actionConstants'
import { getMovieGenres, getMovieList } from './redux/actionCreators';
import { selectCategories, selectMovieLists } from './redux/selectors';
import { Close } from './style/moiveDetail';

const App = memo(() => {
  const totalPage = 500;
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(GENRES_API)
      .then(res => {
        dispatch(getMovieGenres(res.data.genres))
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .all(
        [...new Array(totalPage)].map((i, j) =>
          axios.get(`${MOVIE_LIST_API}${j + 1}`)
        )
      )
      .then(
        axios.spread((...responses) => {
          let movies = [];
          responses.forEach((res) => movies = movies.concat(res.data.results))
          dispatch(getMovieList(movies));
        })
      )
      .catch((errors) => {
        console.log(errors)
      });
  }, [dispatch]

  )


  const genres_lists = useSelector(selectCategories);
  const movieLists = useSelector(selectMovieLists);


  return (
    <div>
      <Router history={browserHistory} >

        <Header />

        <Route path="/" exact >
          <Category genres_lists={genres_lists} />
          <List movieList={movieLists} />
        </Route>

        <Route path="/detail" >
          <MovieDetail>
          </MovieDetail>
          <Close onClick={browserHistory.goBack}>Close</Close>

        </Route>

        <Route path="/blocklist"  >
          <ListWrapper className="otherList" >
            <ListItem />
          </ListWrapper>
        </Route>

        <Route path="/likelist">
          <ListWrapper className="otherList">
            <ListItem />
          </ListWrapper>
        </Route>
      </Router>





    </div>
  )
})
export default App;
