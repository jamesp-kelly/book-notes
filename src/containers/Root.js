import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookNotesApp from '../containers/BookNotesApp';
import BookDetails from '../containers/BookDetails'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div> 
          <Route exact path="/" component={BookNotesApp} />
          <Route path="/:bookId" component={BookDetails} />
        </div>
      </Router>
    </Provider>
  );
}

export default Root;