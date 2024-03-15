import React from 'react'
import { SelectAddress  } from '.'

const Address = () => {
  return (
    <div>
      <h2 className='fon-semibold text-xl'>Địa chỉ cho thuê </h2>
      <div className='flex flex-col gap-4'>
        <SelectAddress  label='Tỉnh/Thành phố'/>
        <SelectAddress  label='Quận/Huyện'/>
      </div>

       <input value='123' type="text" readOnly className='border border-gray-200 rounded-md outline-none bg-gray-100 p-2 w-full mt-10'/>
  
    </div>
  )
}

export default Address
