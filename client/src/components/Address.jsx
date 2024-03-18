import React , {useEffect, useState} from 'react'
import { SelectAddress  } from '.'
import { apiGetPublicProvinces, apiGetPublicDistrict } from '../services'

const Address = () => {
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [province, setProvince] = useState()
  const [district, setDistrict] = useState()
  const [reset, setReset] = useState(false)
  useEffect(() => {
     const fetchPublicProvinces = async() => {
      const res = await apiGetPublicProvinces()
      if(res.status === 200){
        setProvinces(res?.data.results)
      }
     }
     fetchPublicProvinces()
  }, [])
  useEffect(() => {
    setDistrict(null)
      const fetchPublicDistrict = async() => {
        const res = await apiGetPublicDistrict(province)
        if(res.status === 200){
          setDistricts(res?.data?.results)
        }
       
      }
      province && fetchPublicDistrict(province)
      !province ? setReset(true) : setReset(false)
      !province && setDistrict([])
  }, [province])

  return (

    <div>
      <h2 className='fon-semibold text-xl'>Địa chỉ cho thuê </h2>
      <div className='flex flex-col gap-4'>
        <SelectAddress type='province' options={provinces} value={province} setValue={setProvince} label='Tỉnh/Thành phố'/>
        <SelectAddress reset={reset} type='district' options={districts} value={province} setValue={setDistrict} label='Quận/Huyện'/>
      </div>

       <div className='flex flex-col gap-2'>
        <label className='font-medium' htmlFor="exactly-address">Địa chỉ chính xác</label>
        <input id='exactly-address' type="text" readOnly className='border border-gray-200 rounded-md outline-none bg-gray-100 p-2 w-full'
    value={`${district ? `${districts?.find(item => item.district_id === district)?.district_name},` : ''} ${province ? provinces?.find(item => item.province_id === province)?.province_name : ''}`}
        />
       </div>
  
    </div>
  )
}

export default Address
