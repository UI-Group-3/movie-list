import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Category from './containers/Category';
import Header from './containers/Header';
import List from './containers/List';
import MovieDetail from './containers/MovieDetail'

const App = () => {
  return (
    <div>
      <Router>

        <Header />

        <Route path="/" exact >
          <Category />
          <List />
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
