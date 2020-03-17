import React from 'react';
import RandomClass from './components/useContext/RandomClass';

export const LangContext = React.createContext();
export const UserContext = React.createContext();
export const ThemeContext = React.createContext();

function App() {
  return (
    <LangContext.Provider value="American English">
      <UserContext.Provider value="Super User">
        <ThemeContext.Provider value="Dark Mode">
          <div className="App">
            <RandomClass />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </LangContext.Provider>
  );
}

export default App;
