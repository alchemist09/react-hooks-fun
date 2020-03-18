import React, { useState, useEffect } from 'react'
import axios from 'axios';

const API_ENDPOINT = `https://jsonplaceholder.typicode.com/posts/1`;

function DataFetchingUseState() {
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(API_ENDPOINT)
      .then(res => {
        setLoading(false);
        setPost(res.data.title)
        setError('')
      })
      .catch(error => {
        setError('Request could not be completed successfully. Something went wrong')
      })
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default DataFetchingUseState
