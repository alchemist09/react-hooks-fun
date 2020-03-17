import React, { Component } from 'react';
import { LangContext, UserContext, ThemeContext } from '../../App';

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
                        <ThemeContext.Consumer>
                          {
                            theme => {
                              return (
                                <React.Fragment>
                                  <p>Language: {language}</p>
                                  <p>User: {user}</p>
                                  <p>Theme: {theme}</p>
                                </React.Fragment> 
                              )
                            }
                          }
                        </ThemeContext.Consumer>
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
