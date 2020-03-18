import React, { useState, useEffect } from 'react'
import axios from 'axios';

const API_ENDPOINT = `https://jsonplaceholder.typicode.com/posts/8`;

function DataFetchingUseState() {
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(API_ENDPOINT)
      .then(res => {
        setLoading(false);
        setPost(res.data)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setError('Request could not be completed successfully. Something went wrong')
        setPost({})
      })
  }, [])
  
  return (
    <div>
      <p>{loading ? 'Loading.....' : post.title}</p>
      <p>{error ? error : null}</p>
    </div>
  )
}

export default DataFetchingUseState
