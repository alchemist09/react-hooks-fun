import React from 'react';
import RandomClass from './components/useContext/RandomClass';

export const LangContext = React.createContext();

function App() {
  return (
    <LangContext.Provider value="American English">
      <div className="App">
        <RandomClass />
      </div>
    </LangContext.Provider>
  );
}

export default App;
