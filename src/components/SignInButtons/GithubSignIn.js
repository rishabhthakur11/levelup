import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

function GithubSignIn() {
  return (
    <div>
    <button className='flex py-2 px-14 rounded-md bg-black gap-x-2  items-center'>
        <div className='text-white'>
          <GitHubIcon color="inherit"/>
        </div>
        <p className='text-white font-semibold'>Continue with Github</p>
    </button>
    </div>
  )
}

export default GithubSignIn