import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Header, Footer} from './components';
import {
  About, Contact, Home, Projects
} from './pages';
import './visual_identity/styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
