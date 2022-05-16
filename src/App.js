import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Comments from './components/Comments/Comments';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
      <>
      <Header />
      <Video />
      <Comments />
      </>
      );
    }
}

export default App;
