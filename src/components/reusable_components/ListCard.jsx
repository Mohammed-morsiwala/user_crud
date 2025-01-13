import React from 'react'

function ListCard({children}) {
  return (
    <div className='bg-slate-300 ring-black rounded-md m-2 flex justify-center items-center'>{children}</div>
  )
}

export default ListCard