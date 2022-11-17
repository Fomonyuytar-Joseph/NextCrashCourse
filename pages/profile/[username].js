import React from 'react'
import { useRouter } from 'next/router'
const Profile = () => {
    let router = useRouter()
    let {username}= router.query    
    
  return (
    <div>Hello {username}</div>
  )
}

export default Profile