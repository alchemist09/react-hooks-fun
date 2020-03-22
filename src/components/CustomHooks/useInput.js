import { useState } from "react";

function useInput(initialState) {
  const [value, setValue] = useState(initialState)

  const reset = () => setValue('')

  const bindValues = {
    value,
    onChange: evt => {
      setValue(evt.target.value)
    }
  }

  return [value, reset, bindValues]
}

export default useInput