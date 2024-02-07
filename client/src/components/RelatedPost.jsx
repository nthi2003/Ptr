import React from 'react'
import { Sitem } from './index'
const RelatedPost = () => {
  return (
    <div className='w-full bg-white rounded-md p-4'>
      <h3 className='font-semibold text-lg mb-4'>Tin mới đăng</h3>
      <div className='w-full flex flex-col gap-2'>
        <Sitem title='NHÀ THẢO ĐIỀN CÓ SÂN , 3  LẦU - GIÁ CHỈ  20 triệu' price='40 triệu / tháng' createAt='Hôm nay' />
        <Sitem />
        <Sitem />

      </div>
    </div>
  )
}
export default RelatedPost