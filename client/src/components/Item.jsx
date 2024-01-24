import React, { memo } from 'react'
import icons from '../ultils/icons'

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/12/12/847160b1-9cfd-462c-a764-f542945d6ba6_1639324401.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/12/12/6bc9d7ec-8241-454e-963a-e49a535bfcbf_1639324506.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/12/12/b2a9fec6-5f2b-4ce3-a503-8e4ae4794704_1639324404.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/12/12/b2a9fec6-5f2b-4ce3-a503-8e4ae4794704_1639324404.jpg",
]

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons

const Item = () => {
  return (
    <div className='w-full flex border-t border-orange-600 p-4 '>
      <div className='w-2/5 flex flex-wrap gap-[2px] items-center '>
        <img src={images[0]} alt="preview" className='w-[47%] h-[120px] object-cover' />
        <img src={images[1]} alt="preview" className='w-[47%] h-[120px] object-cover' />
        <img src={images[2]} alt="preview" className='w-[47%] h-[120px] object-cover' />
        <img src={images[3]} alt="preview" className='w-[47%] h-[120px] object-cover' />
      </div>
      <div className='w-3/5'>
        <div className='flex justify-between gap-4 w-full'>
          <div className='flex items-start'>
            <div className=' text-red-600 font-medium'>
              <GrStar className='star-item' size={18} color='yellow ' />
              <GrStar className='star-item' size={18} color='yellow ' />
              <GrStar className='star-item' size={18} color='yellow ' />
              <GrStar className='star-item' size={18} color='yellow ' />
              <GrStar className='star-item' size={18} color='yellow ' />
              CHO THUÊ CĂN HỘ HOẶC VĂN PHÒNG LÀM VIỆC
            </div>

          </div>
          <div className='w-[10%] flex justify-end  '>
            <BsBookmarkStarFill size={24} color='orange' />
          </div>
        </div>
        <div className='my-2 flex items-center justify-between'>
              <span className='font-bold text-green-600' >3.7 triệu/tháng</span>  
              <span>28m²</span>
              <span>Quận Tân Bình, Hồ Chí Minh</span>
          </div>
          <p className='text-gray-500'>Chính chủ cho thuê phòng trọ trong căn hộ Chung cư Era Town Đức Khải.Khu chung cư rộng rãi, thoáng mát , an ninh, tiện ích đầy đủ , tổng diện tích hơn</p>
          <div className='flex items-center my-5 justify-between'>
            <div className='flex items-center'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="avatar" className='w-[30px] h-[30px] object-cover' />
              <p>Quốc Thi</p>
            </div>
            <div className='flex items-center gap-1'>
              <button type='button' className='bg-blue-700 text-white p-1 rounded-md'>
                   Gọi 43123151312
              </button>
              <button type='button' className='text-blue-700 px-1 rounded-md border border-blue-700'>
                   Nhắn zalo
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default memo(Item)
