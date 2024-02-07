import React from 'react'

const Sitem = ({title, price, image , createAt}) => {
  return (
    <div className='w-full flex items-center gap-2 py-2 border-b border-gray-300'>
      <img src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2018/11/23/wp-20161225-11-09-36-pro_1542975423.jpg" n alt="anh" className='w-[65px] h-[65px] object-cover rounded-md' />

        <div className='w-full flex-auto flex flex-col justify-between gap-1'>
          <h4 className='text-blue-600 text-[15px]'>{`${title?.slice(0,45)}...`}</h4>
          <div className='flex items-center justify-between w-full'>
            <span className='text-sm font-medium text-green-500'>{price}</span>
            <span className='text-sm text-gray-300'>{createAt}</span>
          </div>
        </div>
    </div>
  )
}

export default Sitem