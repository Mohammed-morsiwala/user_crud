import React from 'react'

function Wrapper({children}) {
  return (
    <div className='bg-slate-400 flex justify-center'>{children}</div>
  )
}

export default Wrapper