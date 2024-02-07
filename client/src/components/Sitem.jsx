import React from 'react'
import moment from 'moment'

const Sitem = ({title, price, image , createdAt}) => {
  const formatTime = () => {
    moment.locale('vn')
    return moment(createdAt).fromNow()
  }
  return (
    <div className='w-full flex items-center gap-2 py-2 border-b border-gray-300'>
      <img src={image[0]}  alt="anh" className='w-[65px] h-[65px] object-cover flex-none rounded-md' />

        <div className='w-full flex-auto flex flex-col justify-between gap-1'>
          <h4 className='text-blue-600 text-[15px]'>{`${title?.slice(0,45)}...`}</h4>
          <div className='flex items-center justify-between w-full'>
            <span className='text-sm font-medium text-green-500'>{price}</span>
            <span className='text-sm text-gray-300'>{moment(createdAt).fromNow()}</span>
          </div>
        </div>
    </div>
  )
}

export default Sitem