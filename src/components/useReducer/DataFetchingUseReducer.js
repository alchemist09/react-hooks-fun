import React from 'react'

const initialState = {
  loading: true,
  post: {},
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Request failed. Something went wrong'
      }
    default:
      return state
  }
}

function DataFetchingUseReducer() {
  return (
    <div>
      
    </div>
  )
}

export default DataFetchingUseReducer
