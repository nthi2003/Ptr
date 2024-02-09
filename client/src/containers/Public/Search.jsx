import React, {useState} from 'react'
import { SearchItem, Modal }  from '../../components'
import icons from '../../ultils/icons'
import { useSelector } from 'react-redux'
const {BsChevronRight,HiOutlineLocationMarker, TbReportMoney, RiCrop2Line, MdOutlineHouseSiding, FiSearch } = icons
const Search = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [content, setContent] = useState([])
  const [name, setName] = useState('')
  const { provinces, areas, prices, categories } = useSelector(state => state.app)
  const handleShowModal = (content) => {
     setContent(content)
     setName(name)
     setIsShowModal(true)
  }
  return (
    <>
    <div className='p-[10px] w-3/5 my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2 '>
      <span onClick={()=> handleShowModal(categories, 'categories')} className='cursor-auto flex-1'>
      <SearchItem IconBefore={<MdOutlineHouseSiding/>} fontWeight IconAfter={<BsChevronRight color='rgb(156, 163, 175)' />} text='Phòng trọ, nhà trọ'/>
      </span>
      <span onClick={()=> handleShowModal(provinces, 'provinces')} className='cursor-auto flex-1'>
      <SearchItem IconBefore={<HiOutlineLocationMarker/>}  IconAfter={<BsChevronRight color='rgb(156, 163, 175)' />}  text='Toàn quốc'/>
      </span>
      <span onClick={()=> handleShowModal(prices, 'prices')} className='cursor-auto flex-1'>
      <SearchItem IconBefore={<TbReportMoney/>}  IconAfter={<BsChevronRight color='rgb(156, 163, 175)' />}  text='Chọn giá'/>
      </span>
      <span onClick={()=> handleShowModal(areas, 'areas')} className='cursor-auto flex-1'>
      <SearchItem IconBefore={<RiCrop2Line/>}  IconAfter={<BsChevronRight color='rgb(156, 163, 175)' />}  text='Chọn diện tích'/>
      </span> 
      <button type='button' className='outline-none py-2 px-4 flex-1 w-full bg-secondary1 text-[13.3px] flex items-center justify-center gap-2 text-white font-medium'>
         <FiSearch/>
          Tìm kiếm
      </button>
    </div>
    {isShowModal && <Modal content={content} name={name} setIsShowModal={setIsShowModal}/>}
    </>

  )
}

export default Search
