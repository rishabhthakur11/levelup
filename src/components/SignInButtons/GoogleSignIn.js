import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';

function GoogleSignIn() {
  return (
    <div>
    <button className='flex py-2 px-14 rounded-md bg-white gap-x-2 border border-divided items-center'>
        <div>
          <GoogleIcon color="warning"/>
        </div>
        <p className='text-black font-semibold'>Continue with Google</p>
    </button>
    </div>
  )
}

export default GoogleSignIn