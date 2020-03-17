import React, { Component } from 'react';
import { LangContext, UserContext } from '../../App';

class ClassContext extends Component {
  render() {
    return (
      <div>
        <LangContext.Consumer>
          {
            language => {
              return (
                <UserContext.Consumer>
                  {
                    user => {
                      return (
                        <React.Fragment>
                          <p>Language: {language}</p>
                          <p>User: {user}</p>
                        </React.Fragment> 
                      )
                    }     
                  }
                </UserContext.Consumer>
              )
            }
          }
        </LangContext.Consumer>
      </div>
    )
  }
}

export default ClassContext;
