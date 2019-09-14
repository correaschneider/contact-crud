import React from 'react';
import Routes from './routes'
import './styles.scss'

import Header from './components/Header'

const App = () => (
  <div className="App">
    <Header />
    <div id="content">
      <Routes />
    </div>
  </div>
)

export default App;
