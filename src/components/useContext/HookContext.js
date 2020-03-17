import React, { useContext } from 'react'
import { LangContext, UserContext, ThemeContext } from '../../App'

function HookContext() {
  const language = useContext(LangContext)
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  return (
    <div>
      <p>Language: {language}</p>
      <p>User: {user}</p>
      <p>Theme: {theme}</p>
    </div>
  )
}

export default HookContext
