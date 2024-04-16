import { memo } from "react"
import React  from 'react'
import anonAvatar from '../assests/anon-avatar.png'
import icons from "../ultils/icons"
import { Button } from '.'
const {BsDot , BsTelephoneFill , SiZalo} = icons
const BoxInfo = ({userData: {name , phone , zalo}}) => {
  return (
    <div className="w-full bg-yellow-500 rounded-md flex flex-col items-center p-4">
      <img src={anonAvatar} alt="avatar" className="w-16 h-16 object-contain rounded-full" />
      <h3 className="medium text-xl">{name}</h3>
      <span className="flex items-center gap-2">
        <BsDot color="green" size={24} />
          <span>
            Đang hoạt động
          </span>
         
      </span>
     <a href="" className="bg-[#13BB7B] py-2 flex items-center justify-center gap-2 w-full rounded-md mb-2"><BsTelephoneFill/> {phone}</a>
     <a href={`https://zalo.me/${zalo}`} className="bg-white py-2 flex items-center justify-center gap-2 w-full rounded-md"><SiZalo/> {'Nhắn zalo'} </a>
    </div>
  )
}

export default memo(BoxInfo)
