import React, {useEffect} from 'react'
import { text } from '../../ultils/constant'
import {Province, ItemSidebar} from '../../components'
import { List, Pagination} from './index'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import * as action from '../../store/actions'

const Homepage = () => {
  const [params] = useSearchParams()
  console.log(params)
  const { categories, prices , areas } = useSelector(state => state.app)
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(action.getPrices())
     dispatch(action.getAreas())
  }, [])
  return (
<div className='w-full flex flex-col gap-3' >
            <div>
                <h1 className='text-[28px] font-bold' >{text.HOME_TITLE}</h1>
                <p className='text-base text-gray-700'>{text.HOME_DESCRIPTION}</p>
            </div>
            <Province />
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <List />
                    <Pagination page={params.get('page')}/>
                
                   
                </div>
                <div className='w-[30%] flex flex-col gap-4 justify-start items-center flex flex-col gap-4 justify-start items-center'>
                    <ItemSidebar content={categories} title='Danh sách cho thuê' />
                    <ItemSidebar isDouble={true}  type='priceCode' content={prices} title='Xem theo giá'/>
                    <ItemSidebar isDouble={true}  type='areaCode' content={areas} title='Xem theo diện tích'/>
                </div>
            </div>

        </div>
  )
}

export default Homepage
