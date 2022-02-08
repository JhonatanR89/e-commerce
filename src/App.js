import React from 'react';
import './App.css';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import NavBar from './components/nabvar/NavBar';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <NavBar />
      <hr/>
      <ItemListContainer />
      <hr/>
      <Counter/>
    </div>
  );
}

export default App;
