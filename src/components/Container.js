import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import Categories from './Categories';
import BookList from './bookList';
import AddBook from './Form';

const Container = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <BookList />
      </Route>
      <Route path="/books">
        <BookList />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
    <AddBook />
  </>
);

export default Container;