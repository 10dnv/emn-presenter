import React from 'react'

function Logo() {
  return (
    <div className=' text-orange-600 font-bold  py-3'>
    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
        <span className="relative text-white">Emanuel</span>
    </span>
    <span className='pl-2'>Planner</span>
</div>
  )
}

export default Logo