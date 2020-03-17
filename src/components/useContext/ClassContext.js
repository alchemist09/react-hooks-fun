import React, { Component } from 'react';
import { LangContext } from '../../App';

class ClassContext extends Component {
  render() {
    return (
      <div>
        <LangContext.Consumer>
          {
            language => {
              return <p>Language: {language}</p>
            }
          }
        </LangContext.Consumer>
      </div>
    )
  }
}

export default ClassContext;
