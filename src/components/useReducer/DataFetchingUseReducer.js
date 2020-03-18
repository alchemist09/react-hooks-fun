import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

const API_ENDPOINT = `https://jsonplaceholder.typicode.com/posts/1`

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
      
    </div>
  )
}

export default DataFetchingUseReducer
