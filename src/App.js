import React, { Component } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Tickets from './components/Tickets';

import { Provider } from './Context';

import './style.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="wrapper">
            <Header />
            <main className="content">
              <Filter />
              <Tickets />
            </main>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
