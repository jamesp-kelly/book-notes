import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import BookNotesApp from '../containers/BookNotesApp';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={BookNotesApp} />
      </BrowserRouter>
    </Provider>
  );
}

export default Root;