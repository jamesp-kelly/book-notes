import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookNotesApp from '../containers/BookNotesApp';
import BookDetails from '../containers/BookDetails';
import NoteDetails from '../containers/NoteDetails';

const Root = ({ store }) => { 
  return (
    <Provider store={store}>
      <Router>
        <div> 
          <Route exact path="/" component={BookNotesApp} />
          <Route exact path="/note/:noteId" component={NoteDetails} />
          <Switch>
            <Route exact path="/:bookId" component={BookDetails} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default Root;