import React, { useEffect } from 'react'
import { resetNotifications } from '../../state/reducers/error.reducer'
import { useDispatch } from 'react-redux'

const Review = () => {

  const dispatch = useDispatch()

    useEffect(() => {
      return ()=>dispatch(resetNotifications())
    }, [dispatch])
  
  return (
    <div>
      <h2>No reviews yet</h2>
  </div>
  )
}

export default Review