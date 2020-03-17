import React from 'react';
import RandomClass from './components/useContext/RandomClass';

export const LangContext = React.createContext();
export const UserContext = React.createContext();

function App() {
  return (
    <LangContext.Provider value="American English">
      <UserContext.Provider value="Super User">
        <div className="App">
          <RandomClass />
        </div>
      </UserContext.Provider>
    </LangContext.Provider>
  );
}

export default App;
