import React from 'react'

export default function AbsoluteDash({top, right, bottom, left}) {
  return (
    <div className={`absolute flex items-center gap-x-1 top-[${top || 0}px] right-[${right || 0}px] bottom-[${bottom || 0}px] left-[${left || 0}px]`}>
        <div className='top-[50px] w-20 h-1 rounded-lg bg-primary'></div>
        <div className='top-[50px] w-3 h-1 rounded-lg bg-primary'></div>
        <div className='top-[50px] w-7 h-1 rounded-lg bg-primary'></div>
    </div>
  )
}
