import React, {useState} from 'react'
import { Overview, Address } from '../../components'
import { BsCameraFill } from 'react-icons/bs'

const CreatePost = () => {
  const [payload, setPayload] = useState({
    categoryCode: '',
    title: '',
    star: '',
    priceNumber: 0,
    areaNumber: 0,
    image: '',
    address: '',
    priceCode: '',
    areaCode: '',
    description: '',
    target: '',
    province: '',
  })
  console.log(payload)
  return (
    <div>
      <div className='px-6'>
        <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>Đăng tin mới</h1>
        <div className='flex gap-4'>
          <div className='py-4 flex flex-col gap-8 flex-auto'>
            <Address  payload={payload} setPayload={setPayload} />
            <Overview payload={payload} setPayload={setPayload}/>
            <div className=''>
              <h2 className='font-semibold text-xl py-4'>Hình ảnh</h2>
              <small>Cập nhật hình ảnh rõ ràng</small>
              <div className='w-full'>
                <label className='w-full border-2 h-[200px] gap-4y flex-col flex items-center justify-center my-4 border-gray-400 border-dashed rounded-md' htmlFor="file">
                  <BsCameraFill color='blue' size={50} />
                  Thêm ảnh</label>
                <input hidden type="file" id='file' />
              </div>
            </div>
            <div className='h-[500px]'>

            </div>
          </div>
          <div className='w-[30%] flex-none'>maps</div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
