import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function User() {
  const location = useLocation()
    const {userid} = useParams()
    console.log(location.state)
    console.log(`Bhairav`,userid);
    const usderId = location.state.userid
  return (
   <>
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {usderId}</div>
   </>
  )
}

export default User