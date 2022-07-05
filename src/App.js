import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Routes
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
//Components
import Header from './components/Header/Header';

//App.js: Used to handle routes to other components

class App extends React.Component{

  render() {

    return (
      <>

      {/* Header component renders on every route */}
      <Header />
      
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/upload' component={Upload} />
        </Switch>
      </BrowserRouter>
      </>
    )}
};

export default App;
