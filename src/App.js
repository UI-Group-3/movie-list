import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Category from './containers/Category';
import Header from './containers/Header';
import List from './containers/List';
import MovieDetail from './containers/MovieDetail'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { GENRES_API, MOVIE_LIST_API } from './redux/actionConstants'
import { getMovieGenres, getMovieList } from './redux/actionCreators';
import { selectCategories, selectTotalPage, selectMovieLists } from './redux/selectors';

const App = () => {
  const totalPage = useSelector(selectTotalPage);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(GENRES_API)
      .then(res => {
        dispatch(getMovieGenres(res.data.genres))

      })
      .catch(err => {

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
  }, [dispatch, totalPage]

  )


  const genres_lists = useSelector(selectCategories);
  const movieLists = useSelector(selectMovieLists);
  return (
    <div>
      <Router>

        <Header />

        <Route path="/" exact >
          <Category genres_lists={genres_lists} />
          <List movieList={movieLists} />
        </Route>

        <Route path="/detail" >
          <MovieDetail></MovieDetail>
        </Route>

        <Route path="/blocklist" exact>
          XXX
        </Route>
        <Route path="/likelist" exact>
          YYY
        </Route>
      </Router>





    </div>
  )
}
export default App;
