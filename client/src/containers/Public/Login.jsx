import React, { useState , useEffect} from "react";
import { InputForm, Button } from '../../components'
// import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Login = () => {
    const location = useLocation()

    const [isRegister, setIsRegister] = useState(location.state?.flag)
    useEffect(() => {
          setIsRegister(location.state?.flag)
    }, [location.state?.flag])

    

    return (
        <div className='w-full flex items-center justify-center'>
            <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
                <h3 className="text-2xl font-semibold mb-3">{isRegister ? 'Đăng kí tài khoản ' : 'Đăng nhập'}</h3>
                <div className="w-full flex flex-col gap-5 ">
                    {isRegister && <InputForm label={'HỌ TÊN'} />}
                    <InputForm label={'SỐ ĐIỆN THOẠI'} />
                    <InputForm label={'Mật Khẩu'} />
                    <Button
                        text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
                        bgColor='bg-secondary1'
                        textColor='text-white'
                        fullWidth
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