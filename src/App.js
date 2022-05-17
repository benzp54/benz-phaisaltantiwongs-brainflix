import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import CommentsNew from './components/CommentsNew/CommentsNew';
import CommentsList from './components/CommentsList/CommentsList';
import Suggestions from './components/Suggestions/Suggestions';
import videoData from './data/video-details.json';
import React from 'react';

//Add state to update active video & video list
  //Add a constructor to enable use of state

class App extends React.Component{

  constructor() {
    super();

    this.state = {videoActive: videoData[0]}
  }

  render() {
    return (
      <>
      <Header />
      <Video videoActive = {this.state.videoActive}/>
      <CommentsNew />
      <CommentsList videoActive = {this.state.videoActive}/>
      <Suggestions />
      </>
    );
  }
};

export default App;
