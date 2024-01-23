import React, { memo } from 'react'


const SearchItem = ({ IconBefore, IconAfter, text, fontWeight }) => {
    return (
        <div className='bg-white flex items-center justify-between py-2 px-4 text-[13.3px] w-full rounded-md text-gray-400'>
            <div className='flex items-center gap-1 w-full'>
                {IconBefore}
                <span className={`${fontWeight &&  'font-medium text-black'} w-[100px] overflow-hiden text-ellipsis whitespace-nowrap`}>{text}</span>
            </div>

            {IconAfter}
        </div>
    )
}

export default memo(SearchItem)
