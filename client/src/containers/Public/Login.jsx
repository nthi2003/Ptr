import React, { useState, useEffect } from "react";
import { InputForm, Button } from '../../components'
import { useLocation } from 'react-router-dom'
import * as actions from "../../store/actions"

import { useDispatch } from 'react-redux'

const Login = () => {
    const location = useLocation()
    const dispath = useDispatch()


    const [isRegister, setIsRegister] = useState(location.state?.flag)
    const [invalidFields, setInvalidFields] = useState([])
    const [payload, setPayload] = useState({
        phone: '',
        password: '',
        name: ''
    })
    useEffect(() => {
        setIsRegister(location.state?.flag)
    }, [location.state?.flag])

    const handleSubmit = async () => {
        console.log(payload)
        // isRegister ? dispath(actions.register(payload)) : dispath(actions.login(payload))
        // console.log(response);
       let invalids = validate(payload);
       console.log(invalids)
       console.log(invalidFields)
    }
    console.log(invalidFields)
    const validate = (payload) => {
        console.log(payload)
        let invalids = 0
        let fields = Object.entries(payload)
        fields.forEach(item => {
            if (item[1] === '') {
                setInvalidFields(prev => [...prev, {
                    name: item[0],
                    message: 'Bạn không được bỏ trống trường này.'
                }])
                invalids++
            }
        })
        fields.forEach(item => {
            switch (item[0]){
                case 'password':
                    if(item[1].length < 6) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Mật khẩu phải có tối thiểu là 6 kí tự .'
                     }])
                     invalids++
                    }

                    break;
                    case 'phone':
                        console.log(typeof + item[1] )
                        if(typeof +item[1] ){
                            setInvalidFields(prev => [...prev, {
                                name: item[0],
                                message: 'Số điện thoại không hợp lệ .'
                         }])
                         invalids++
                        }
                        break
                default:
                    break;
            }
        })
        return invalids

    }
    return (
        <div className='w-full flex items-center justify-center'>
            <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
                <h3 className="text-2xl font-semibold mb-3">{isRegister ? 'Đăng kí tài khoản ' : 'Đăng nhập'}</h3>
                <div className="w-full flex flex-col gap-5 ">
                    {isRegister && <InputForm invalidFields={invalidFields} label={'HỌ TÊN'} value={payload.name} setValue={setPayload} type={'name'} />}
                    <InputForm invalidFields={invalidFields} label={'SỐ ĐIỆN THOẠI'} value={payload.phone} setValue={setPayload} type={'phone'} />
                    <InputForm invalidFields={invalidFields} label={'Mật Khẩu'} value={payload.password} setValue={setPayload} type={'password'} />
                    <Button
                        text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
                        bgColor='bg-secondary1'
                        textColor='text-white'
                        fullWidth
                        onClick={handleSubmit}

                    />
                </div>
                <div className="mt-7 flex items-center justify-between">
                    {isRegister
                        ? <small>Bạn đã có tài khoản ? <span
                            onClick={() => { setIsRegister(false) }}
                            className="text-blue-500 hover:underline"
                        >
                            Đăng nhập ngay
                        </span></small>
                        : <>
                            <small className="text-[blue] hover:text-[red] ursor-pointer">Bạn quên mật khẩu</small>
                            <small
                                onClick={() => { setIsRegister(true) }}
                                className="text-[blue] hover:text-[red] cursor-pointer"
                            >
                                Tạo mật khẩu mới</small>
                        </>}
                </div>

            </div>
        </div>
    )
}

export default Login