import React, { memo } from 'react'
import icons from '../ultils/icons'
import { useSelector } from 'react-redux'

const { GrNext } = icons
const ItemSidebar = ({ title, content }) => {

    return (
        <div className='p-4 rounded-md bg-white w-full'>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <div className='flex flex-col gap-2'>
                {content?.length > 0 && content.map(item => {
                    return (
                        <div key={item.code} className='flex gap-2 items-center border-b cursor-pointer hover:text-orange-600 border-gray-200 pd-1 border-dashed'>
                            <GrNext size={10} color='#ccc' />
                            <p>{item.value}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default memo(ItemSidebar)
