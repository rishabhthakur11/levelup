import React from 'react'
import EmailIcon from '@mui/icons-material/Email';

function EmailPassword() {
  return (
    <div className='flex flex-col gap-y-5 justify-center items-center'>
        <input className='w-80 rounded-md p-3 bg-white text-textGray text-semibold focus:outline-none'placeholder='Your email here'/>
        <div>
    <button className='flex py-2 px-16 rounded-md bg-btnOrange gap-x-2 items-center'>
        <div>
          <EmailIcon/>
        </div>
        <p className='text-black font-semibold'>Continue with Email</p>
    </button>
    </div>

       

    </div>
  )
}

export default EmailPassword