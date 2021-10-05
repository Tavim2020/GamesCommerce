import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

          <Switch>

            <Route path='/' exact component={Home} />

          </Switch>

          <Footer />
      
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
