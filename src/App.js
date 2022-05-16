import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import CommentsNew from './components/CommentsNew/CommentsNew';
import CommentsList from './components/CommentsList/CommentsList';
import Suggestions from './components/Suggestions/Suggestions';
import React from 'react';

//Add state to update active video & video list
  //Add a constructor to enable use of state

function App() {
    return (
      <>
      <Header />
      <Video />
      <CommentsNew />
      <CommentsList />
      <Suggestions />
      </>
      );
};

export default App;
