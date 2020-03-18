import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

const API_ENDPOINT = `https://jsonplaceholder.typicod.com/posts/3`

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
        post: {},
        error: 'Request failed. Something went wrong'
      }
    default:
      return state
  }
}

function DataFetchingUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get(API_ENDPOINT)
      .then(res => {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: 'FETCH_ERROR'
        })
      })
  }, [])

  return (
    <div>
      <p>{state.loading ? 'Loading........' :  state.post.title}</p>
      <p>{state.error ? state.error : null}</p>
    </div>
  )
}

export default DataFetchingUseReducer
