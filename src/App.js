import React from 'react';
import './App.css';
import { Navbar } from './components';
import { Home } from './pages';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"
import { Article1, Article2, Article3 } from './articles';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar/>

        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/article1" component={Article1} />
            <Route exact path="/article2" component={Article2} />
            <Route exact path="/article3" component={Article3} />
          </Switch>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
